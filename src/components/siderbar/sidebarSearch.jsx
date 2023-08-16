import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import db from "../../firebase";
import SidebarChat from "./sidebarChat";
import { IconButton } from "@mui/material";
import {
  collection,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore/lite";
import { useEffect, useReducer, useState } from "react";
import chatReducer, {
  CHAT_ACTION_TYPE,
  CHAT_INITIAL_STATE,
} from "../context/chatReducer";
import { useStateValue } from "../context/stateProvider";
import { onSnapshot, doc } from "firebase/firestore";

const SidebarSearch = () => {
  const [searchedName, setSearchedName] = useState(null);
  const [chatState, dispatch] = useReducer(chatReducer, CHAT_INITIAL_STATE);
  const [userState, userDispatch] = useStateValue();

  // fetching existing chats
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChat", userState.user.uid),
        (doc) => {
          console.log("snapshot: ", doc.data());
        }
      );
    };
    userState.user.uid && getChats();
  }, [userState.user.uid]);

  const handleChatSearch = async () => {
    try {
      const userRef = collection(db, "user");
      const q = query(userRef, where("displayName", "==", searchedName));

      getDocs(q)
        .then((querySnapshot) => {
          // console.log("querySnapshot: ", querySnapshot);
          querySnapshot.forEach((doc) => {
            dispatch({
              type: CHAT_ACTION_TYPE.SET_CHAT,
              payload: { value: doc.data() },
            });
          });
        })
        .catch((err) => {
          console.log("Query error(get): ", err.message);
        });
    } catch (err) {
      console.log("Query error: ", err.message);
    }
  };

  // console.log("chatUsers: ", chatState);

  const handleKeydown = (e) => {
    if (e.target.value.length > 0) e.code == "Enter" && handleChatSearch();
  };

  const handleSelect = async (data) => {
    console.log("userState1: ", userState.user);
    console.log("data1: ", data);
    const chatUid =
      userState.user.uid > data.uid
        ? userState.user.uid + data.uid
        : data.uid + userState.user.uid;

    try {
      const res = await getDoc(doc(db, "chats", chatUid));

      if (!res.exists()) {
        // create chat in chats in collection
        setDoc(doc(db, "chats", chatUid), { message: [] });

        // create userchat
        try {
          await updateDoc(doc(db, "userChat", userState.user.uid), {
            [chatUid + ".userInfo"]: {
              uid: data.uid,
              displayName: data.displayName,
              photoURL: data.photoURL,
            },
            [chatUid + ".date"]: serverTimestamp(),
          });
        } catch (err) {
          console.log("Error: update docs1 ", err.message);
        }
        try {
          await updateDoc(doc(db, "userChat", data.uid), {
            [chatUid + ".userInfo"]: {
              uid: userState.user.uid,
              displayName: userState.user.displayName,
              photoURL: userState.user.photoURL,
            },
            [chatUid + ".date"]: serverTimestamp(),
          });
        } catch (err) {
          console.log("Error: update docs2 ", err.message);
        }
      }
    } catch (err) {
      console.log("Error: handleSelect  getDocs ", err.message);
    }
  };

  return (
    <>
      <div className="sidebar__search">
        <div className="sidebar__searchbox">
          <SearchRoundedIcon />
          <input
            value={searchedName == null ? "" : searchedName}
            type="text"
            name="sidebar--search"
            className="siderbar__search-input input--textbox"
            placeholder="Search or start new chat"
            onKeyDown={(e) => handleKeydown(e)}
            onChange={(e) => setSearchedName(e.target.value)}
          />

          {searchedName && searchedName.length > 0 ? (
            <ClearRoundedIcon
              className="search__chat__clear-icon"
              onClick={() => setSearchedName(null)}
            />
          ) : (
            ""
          )}
        </div>
        <div className="sidebar__search-unread-chat">
          <IconButton>
            <FilterListRoundedIcon />
          </IconButton>
        </div>
      </div>

      {/* chats */}
      <div className="sidebar__chats">
        {chatState.users.length ? (
          chatState.users.map((user) => (
            <SidebarChat
              key={user.uid}
              id={user.uid}
              data={user}
              onClick={handleSelect}
            />
          ))
        ) : (
          <span>No user found</span>
        )}
      </div>
    </>
  );
};

export default SidebarSearch;

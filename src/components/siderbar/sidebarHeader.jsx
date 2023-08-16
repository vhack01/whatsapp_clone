import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { Avatar, IconButton } from "@mui/material";
import { useStateValue } from "../context/stateProvider";
import Dropdown from "../common/dropdown";
import { useState } from "react";

const SidebarHeader = () => {
  const [{ user }, dispatch] = useStateValue();
  //   console.log("users: ", user.photoURL);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="sidebar__header">
      <div className="sidebar__avatar">
        <Avatar alt="User_icon" src={user?.photoURL} />
      </div>
      <div className="sidebar__header__icons">
        <IconButton>
          <DonutLargeRoundedIcon />
        </IconButton>
        <IconButton>
          <ChatRoundedIcon />
        </IconButton>
        <IconButton
          className="sidebar__header___vmore"
          onClick={(e) => setShowDropdown(!showDropdown)}
          style={{
            backgroundColor: `${
              showDropdown ? "rgba(0, 0, 0, 0.06)" : "rgba(0, 0, 0, 0.0)"
            }`,
          }}
        >
          <Dropdown
            lists={[
              { name: "new-group", value: "New Group" },
              { name: "new-community", value: "New community" },
              { name: "starred-message", value: "Starred Message" },
              { name: "select-chats", value: "Select chats" },
              { name: "settings", value: "Settings" },
              { name: "logout", value: "Logout" },
            ]}
            show={showDropdown}
          />
          <MoreVertRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SidebarHeader;

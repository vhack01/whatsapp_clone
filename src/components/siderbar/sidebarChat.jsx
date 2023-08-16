import { Avatar } from "@mui/material";

const SidebarChat = ({ data, onClick }) => {
  const { uid, displayName, email, photoURL } = data;
  return (
    <div className="sidebar__chatbox" onClick={() => onClick(data)}>
      <div className="siderbar__chatbox__profile-image">
        <Avatar src={photoURL} alt="avatar" />
      </div>
      <div className="sidebar__chat__message">
        <div className="sidebar__chat__message-top">
          <div className="sidebar__chat__message-name">
            <h2>{displayName}</h2>
          </div>
          <div className="sidebar__chat__message-time">
            <p>Yesterday</p>
          </div>
        </div>
        <div className="sidebar__chat__message-bottom">
          <p className="p--ellipsis">
            Hey I am vishwas kumar kumar cloning whatsapp app welcome
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarChat;

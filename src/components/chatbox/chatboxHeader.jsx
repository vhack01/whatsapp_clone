import { Avatar, IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const ChatboxHeader = () => {
  return (
    <div className="chatbox__header">
      {/* header left */}
      <div className="chatbox__header-left">
        <div className="chatbox__header-left-image">
          <Avatar />
        </div>
        <div className="chatbox__header-left-text">
          <div className="chatbox__header-left-name">
            <h2>Vishwas kumar</h2>
          </div>
          <div className="chatbox__header-left-active">
            <p className="chatbox__header-left-active-time">Message yourself</p>
          </div>
        </div>
      </div>

      {/* header right */}
      <div className="chatbox__header-right icon--wrapper">
        <IconButton>
          <SearchRoundedIcon />
        </IconButton>
        <IconButton>
          <MoreVertRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatboxHeader;

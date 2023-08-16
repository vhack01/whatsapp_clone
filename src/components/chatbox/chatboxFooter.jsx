import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import { IconButton } from "@mui/material";

const ChatboxFooter = () => {
  return (
    <div className="chatbox__footer">
      <div className="chatbox__footer__container icon--wrapper">
        <IconButton>
          <SentimentSatisfiedRoundedIcon />
        </IconButton>
        <IconButton>
          <AddRoundedIcon />
        </IconButton>
        <div className="chatbox__footer__type">
          <input
            type="text"
            name="a"
            id="v"
            className="chatbox__footer__type-input input--textbox"
            placeholder="Type a message here..."
          />
        </div>
        <IconButton>
          <MicRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatboxFooter;

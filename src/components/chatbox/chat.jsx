import "../../css/chat.css";
import { IconButton } from "@mui/material";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";

const Chat = () => {
  return (
    <div className="chat__container chat__sender__container">
      {/* chat row  */}
      <div className="chat__row">
        <div className="chat__container__message">Lorem ipsum</div>
        <div className="chat__container__timestamp">
          12:21 Sunday 13 August 2023
        </div>
      </div>

      {/* emoji*/}
      <div className="chat__emoji icon--wrapper icon--wrapper-small">
        <IconButton>
          <MoodRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;

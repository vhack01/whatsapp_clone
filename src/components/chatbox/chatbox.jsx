import "../../css/chatbox.css";
import ChatboxHeader from "./chatboxHeader";
import ChatboxBody from "./chatboxBody";
import ChatboxFooter from "./chatboxFooter";

const Chatbox = () => {
  return (
    <div className="chatbox">
      {/* Chat header */}
      <ChatboxHeader />

      {/* chat body */}
      <ChatboxBody />

      {/* chat footer */}
      <ChatboxFooter />
    </div>
  );
};

export default Chatbox;

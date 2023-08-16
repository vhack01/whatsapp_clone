import Chat from "./chat";

const ChatboxBody = () => {
  const bgImage = {
    backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
    backgroudPosition: "center center",
    backgroundSize: "contain",
    objectFit: "contain",
    backgroudRepeat: "no-repeat",
  };

  return (
    <div className="chatbox__body" style={bgImage}>
      <div className="chatbox__body__chat-container">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
};

export default ChatboxBody;

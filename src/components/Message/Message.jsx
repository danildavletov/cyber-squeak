import React from "react";
import "./Message.css";

const Message = ({ text, isUserMessage,username }) => {
    return (
      <div className={isUserMessage ? "user-message" : "program-message"}>
        <p className="message-sender">{isUserMessage ? "Вы"  : username}</p>
        <p className="message-text">{text}</p>
      </div>
    );
  };


export default Message;
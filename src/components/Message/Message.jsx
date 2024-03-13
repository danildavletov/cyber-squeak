import React from "react";
import "./Message.css"

const Message = (props) => {
    return (
        <div className="message">
            <p>{props.text}</p>
        </div>
    )
}

export default Message;
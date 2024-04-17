import React from "react";
import "./Message.css";
/*
const Message = (props) => {
    return(
        <div className='message'>
            <p>{props.children || props.text}</p>
        </div>
    )
}
*/


// на вход - объект message в котором есть текст и источник
const Message = (props) => {
    if (props.origin == "user") {
        return (
            <div className='message' id="user">
                <p>{props.msg} &mdash; {props.msg.length}</p>
            </div>
        );
    } else {
        return (
            <div className='message' id="squeak">
                <p>{props.msg} &mdash; {props.msg.length}</p>
            </div>
        );
    }
}

export default Message;
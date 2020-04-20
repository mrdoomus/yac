import React from "react";
import PropTypes from "prop-types";
import CommandMessage from "./CommandMessage";
import "../styles/message.css";

/*
Component that defines the look of the messages
@message: Message to be written
@author: Author of the message
*/
const Message = (props) => {
  const command = props.message.split(" ");

  switch (command[0]) {
    case "/youtube":
      return <CommandMessage key={props.id} {...props} />;
    default:
      return (
        <p class="message">
          <strong class="message-author">{props.author}</strong>:{" "}
          {props.message}
          <p class="message-time">{props.time}</p>
        </p>
      );
  }
};

// void Linting errors
Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;

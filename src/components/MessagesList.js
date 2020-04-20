import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

/*
Component that displays every single message written atm
@messages: List with all messages

messages is passed by the container in the connect func
*/
const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul class="messages-list-ul">
      {messages.map((message) => (
        // Passing Message component the author and the message
        <Message key={message.id} {...message} />
      ))}
    </ul>
  </section>
);

// Avoid Linting errors
MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MessagesList;

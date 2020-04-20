import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/message.css";

/*
Component that defines the look of the messages
@message: Message to be written
@author: Author of the message
*/
const CommandMessage = ({ message, author, time }) => {
  const [videoId, setVideoId] = useState([]);
  const command = message.split(" ");
  const query = command.slice(1).join("+");

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAXv4dRTaYoq8afDX3rnrgkUiisFPSje9o&type=video&part=snippet&maxResults=1&q=" +
        query
    )
      .then((res) => res.json())
      .then((result) => {
        setVideoId(result.items[0].id.videoId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <p class="message">
      <strong class="message-author">{author}</strong>: {message}
      <p class="message-time">{time}</p>
      <br />
      <iframe
        title="video"
        width="420"
        height="315"
        src={`http://www.youtube.com/embed/${videoId}`}
        frameBorder="10"
        allowFullScreen
      ></iframe>
    </p>
  );
};

// void Linting errors
CommandMessage.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default CommandMessage;

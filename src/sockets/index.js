import * as types from "../redux/actions/ActionTypes";
import { addUser, messageReceived, populateUsersList } from "../redux/actions";


const setupSocket = (dispatch, username) => {
  let socket

  if(process.env.PORT === undefined) {
    socket = new WebSocket("ws://localhost:1488");
  } else {
    socket = new WebSocket("ws://localhost:" + process.env.PORT.toString());
  }

  // When we receive a new user from client to the server
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.ADD_USER,
        name: username,
      })
    );
  };

  // When we receive an event from the client to the server
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author));
        break;
      case types.ADD_USER:
        dispatch(addUser(data.name));
        break;
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };
  return socket;
};

export default setupSocket;

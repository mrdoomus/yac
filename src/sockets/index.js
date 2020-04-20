import * as types from "../redux/actions/ActionTypes";
import { addUser, messageReceived, populateUsersList } from "../redux/actions";

//let userList = [];

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket("ws://localhost:8989");

  /*
  if (userList.includes(username)) {
    alert(username + " Has already been taken, please select another.");
    window.location.reload();
  } else userList.push(username);

  console.log(userList);
*/
  // When we receive a new user from the server
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.ADD_USER,
        name: username,
      })
    );
  };

  // When we receive a message from the server
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

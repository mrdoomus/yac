import * as types from "./ActionTypes";

let nextMessageId = 0;
let nextUserId = 0;
let date = new Date();

/* Action - When a new message is sent
@message: The message
@author: Who the message is from
In state
@type: Name of the action
@id: Amount of messages
*/
export const addMessage = (message, author) => (
  (date = new Date()),
  {
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    time: date.toLocaleTimeString(),
    message,
    author,
  }
);

/* Action - When a new user enters the chat
@name: name of the user
In state
@type: Name of the action
@id: Amount of users
*/
export const addUser = (name) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name,
});

/* Action - When the OTHER USERS receive a message
@message: The message
@author: Who the message is from
In state
@type: Name of the action
@id: Amount of messages
*/
export const messageReceived = (message, author) => (
  (date = new Date()),
  {
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    time: date.toLocaleTimeString(),
    message,
    author,
  }
);

/* Action - Updates user list when a user enters the chat
@users: List of user names
In state
@type: Name of the action
*/
export const populateUsersList = (users) => ({
  type: types.USERS_LIST,
  users,
});

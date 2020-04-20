import { takeEvery } from "redux-saga/effects";
import * as types from "../redux/actions/ActionTypes";

// A generator function, so everytime it runs, it can return a different value
// This will add the author of the messages as the user that typed it
// It will also be broadcasted to every connected user
const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;

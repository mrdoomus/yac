import { combineReducers } from "redux";
import messages from "./Messages";
import users from "./Users";

/*
combineReducers is a big blender of 2 or more reducers (messages, users)
It converts N reducers into one
*/
const chat = combineReducers({
  messages,
  users,
});

export default chat;

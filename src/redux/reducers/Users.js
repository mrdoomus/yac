import * as types from "../actions/ActionTypes";

/*
This state handles all the Users related actions for state changes
@state[]: Original state
@action: Action to be executed on a state copy
*/
const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, { name: action.name, id: action.id }];
    case types.USERS_LIST:
      return action.users;
    // If the reducer receives an action that it doesn't care about, it should return the unchanged state
    default:
      return state;
  }
};

export default users;

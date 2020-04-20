import * as types from "../actions/ActionTypes";

/*
This state handles all the Message related actions for state changes
@state[]: Original state
@action: Action to be executed on a state copy
*/
const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      // Creates a new state with values from the action
      return [
        ...state,
        {
          message: action.message,
          author: action.author,
          id: action.id,
          time: action.time,
        },
      ];
    // If the reducer receives an action that it doesn't care about, it should return the unchanged state
    default:
      return state;
  }
};

export default messages;

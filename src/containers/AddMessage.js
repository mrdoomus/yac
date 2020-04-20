import { connect } from "react-redux";
import AddMessageComponent from "../components/AddMessage";
import { addMessage } from "../redux/actions";

// This is the smart vs dumb connection
/*
smart - Container knowing actions should be dispatched
dumb - Component knowing how the new state,
created by a dispatched action should behave

@dispatch: Action that must be dispatched
from AddMessageComponent we receive input.value and "Me"
for "message" and "author" respectively
*/
const mapDispatchToProps = (dispatch) => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author));
  },
});

// This connect(mapStateToProps, mapDispatchToProps)
/*
@mapStateToProps: What state is passed via props
@mapDispatchToProps: Which actions are dispatched via props

Connect returns a function. that function then calls our component
connect binds up the "behavior" and the "look"

In this case
mapStateToProps - New empty state
mapDispatchToProps - addMessage action with message and author passed to props
*/
export const AddMessage = connect(
  () => ({}),
  mapDispatchToProps
)(AddMessageComponent);

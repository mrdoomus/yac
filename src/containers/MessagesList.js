import { connect } from "react-redux";
import MessagesListComponent from "../components/MessagesList";

// This connect(mapStateToProps, mapDispatchToProps)
/*
@mapStateToProps: What state is passed via props
@mapDispatchToProps: Which actions are dispatched via props

Connect returns a function. that function then calls our component
connect binds up the "behavior" and the "look"

In this case:
mapStateToProps - List of all messages
mapDispatchToProps - No actions dispatched
*/
export const MessagesList = connect(
  (state) => ({
    messages: state.messages,
  }),
  {}
)(MessagesListComponent);

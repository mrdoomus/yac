import { connect } from "react-redux";
import SidebarComponent from "../components/Sidebar";

// This connect(mapStateToProps, mapDispatchToProps)
/*
@mapStateToProps: What state is passed via props
@mapDispatchToProps: Which actions are dispatched via props

Connect returns a function. that function then calls our component
connect binds up the "behavior" and the "look"

In this case:
mapStateToProps - List of all users
mapDispatchToProps - No actions dispatched
*/
export const Sidebar = connect(
  (state) => ({
    users: state.users,
  }),
  {}
)(SidebarComponent);

import React from "react";
import PropTypes from "prop-types";

/*
Component that dispalys the list of the connected users
@users: List with users
*/
const Sidebar = ({ users }) => (
  <aside id="sidebar">
    <h2>Online Users</h2>
    <ul>
      {users.map((user) => (
        <li class="sidebar-user" key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  </aside>
);

// Avoid linting erros
Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Sidebar;

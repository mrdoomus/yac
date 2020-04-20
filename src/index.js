import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "./styles/index.css";
import App from "./App";
import setupSocket from "./sockets/index";
import reducers from "./redux/reducers";
import handleNewMessage from "./sagas";

// Creating saga middleware to intervene reducers
const sagaMiddleware = createSagaMiddleware();
// Applying saga middleware to the store creation
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// Getters for index.html
const root = document.getElementById("root");
const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  state = {
    username: "",
    open: true,
  };

  // Function to handle input change
  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  // Function to handle "login" submition
  handleSubmit = (event) => {
    event.preventDefault();

    // Prevent empty users
    if (this.state.username === "") {
      this.state.username = "User" + Math.floor(Math.random() * 100);
    }

    // Connecting socket on client with server
    // Sending the selected store and username issued
    const socket = setupSocket(store.dispatch, this.state.username);
    sagaMiddleware.run(handleNewMessage, {
      socket,
      username: this.state.username,
    });
    this.setState({ open: false });
  };

  render() {
    if (this.state.open) {
      return ReactDOM.createPortal(
        <div id="modal">
          <div class="modal-outside">
            <div class="modal-inside">
              <h1 class="modal-title">
                <strong>Y.A.C</strong>
              </h1>
              <hr />
              <p class="modal-subtitle">
                <i>Please, enter your username</i>
              </p>
              <form noValidate onSubmit={this.handleSubmit}>
                <div>
                  <input
                    class="modal-input"
                    size="50"
                    type="text"
                    name="username"
                    placeholder="User1"
                    onChange={this.handleChange}
                  />
                </div>
                <div class="modal-button-holder">
                  <button
                    class="modal-button"
                    onClick={this.handleOpen}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>,
        modalRoot
      );
    } else {
      return null;
    }
  }
}

ReactDOM.render(
  // Overall store is Read-Only. Only "changed" by actions
  <Provider store={store}>
    <Modal />
    <App />
  </Provider>,
  root
);

import React, { Component } from "react";
import "./styles/App.css";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Y.A.C</h1>
        <div id="container">
          <Sidebar />
          <section id="main">
            <MessagesList />
            <AddMessage />
          </section>
        </div>
      </div>
    );
  }
}

export default App;

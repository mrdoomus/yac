const WebSocket = require("ws");

// Initializing a new web socket server on port 8989
const wss = new WebSocket.Server({ port: 8989 });

let users = [];

// broadcast is basially a function that sends inf oto all users online
/*
@data
@ws
*/
const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

// When a client enters, the server will start listening to ADD_USER and ADD_MESSAGE
wss.on("connection", (ws) => {
  let userId = Math.floor(Math.random() * 10 ** 10);

  ws.on("message", (message) => {
    const data = JSON.parse(message);

    /*
    if (users.length >= 1) {
      users.forEach((element) => {
        if (data.name === element.name) {
          ws.terminate();
        }
      });
    }*/

    switch (data.type) {
      case "ADD_USER": {
        users.push({ name: data.name, id: userId });
        ws.send(
          JSON.stringify({
            type: "USERS_LIST",
            users,
          })
        );
        broadcast(
          {
            type: "USERS_LIST",
            users,
          },
          ws
        );
        break;
      }
      case "ADD_MESSAGE":
        broadcast(
          {
            type: "ADD_MESSAGE",
            message: data.message,
            author: data.author,
            time: data.time,
          },
          ws
        );
        break;
      default:
        break;
    }
  });

  ws.on("close", () => {
    // Remove User from 'database'
    users = users.filter((u) => {
      return u.id !== userId;
    });

    // Send updated user list to all the connected users
    broadcast(
      {
        type: "USERS_LIST",
        users,
      },
      ws
    );
  });
});

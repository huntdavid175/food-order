const { Server } = require("socket.io");

class Socketio {
  constructor() {
    this.io = undefined;
  }

  init(server) {
    this.io = new Server(server);
    return this.io;
  }

  getIo() {
    return this.io;
  }
}

module.exports = { socket: new Socketio() };

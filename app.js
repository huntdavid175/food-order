const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
require("dotenv").config();
const { orders } = require("./controllers/order");
const { socket } = require("./socketio");

const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/order");
const numberRoutes = require("./routes/number");

const app = express();
const httpServer = createServer(app);
const io = socket.init(httpServer);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/", menuRoutes);
app.use("/order", orderRoutes);
app.use("/number", numberRoutes);

io.on("connection", (socket) => {
  console.log("User Connected");
  console.log("This is user id: " + socket.id);
  // const data = [{ foodName: "Yam" }, { foodName: "Egg" }];

  socket.on("world", (result) => {
    console.log(result);
    socket.emit("world", orders);
  });
});

// io.on("connect_error", (err) => {
//   console.log(`Connet_error due to ${err.message}`);
// });

const db = require("./config/db");

db().then(() => {
  httpServer.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
  });
});

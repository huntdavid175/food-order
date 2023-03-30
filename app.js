const express = require("express");
require("dotenv").config();

const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/order");
const numberRoutes = require("./routes/number");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", menuRoutes);
app.use("/order", orderRoutes);
app.use("/number", numberRoutes);

const db = require("./config/db");

db().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
  });
});

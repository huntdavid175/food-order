const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  foodList: [
    {
      foodName: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Menu", menuSchema);

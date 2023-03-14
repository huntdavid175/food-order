const mongoose = require("mongoose");

const Number = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Number", Number);

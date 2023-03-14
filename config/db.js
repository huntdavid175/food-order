const mongoose = require("mongoose");

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wv2cn0r.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoConnect;

const Number = require("../models/number");

const addNumber = async (req, res) => {
  const { number } = req.body;
  try {
    await Number.create({ number: number });
    res.status(201).json({ message: "Number added" });
  } catch (error) {
    console.log(error);
  }
};

const getNumbers = async (req, res) => {
  const numbers = await Number.find();
  try {
    res.status(200).json({ data: numbers });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addNumber, getNumbers };

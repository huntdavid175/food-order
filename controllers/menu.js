const Menu = require("../models/menu");

const { toJson } = require("../config/test");

const addMenu = async (req, res) => {
  const menuItem = req.body;

  try {
    await Menu.create(menuItem);
    res
      .status(201)
      .json({ status: "success", message: "Menu item created successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "failed", message: "Something happened" });
  }
};

const addManyMenu = async (req, res) => {
  const response = await toJson();

  try {
    await Menu.deleteMany();
    await Menu.insertMany(response);
    res.json({ message: "Added successfully" });
  } catch (error) {
    console.log(error);
  }
};

const getAllMenu = async (req, res) => {
  try {
    const data = await Menu.find();
    if (data) {
      res.status(200).json({ data: data });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMenu, addManyMenu, getAllMenu };

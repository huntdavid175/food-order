const Menu = require("../models/menu");

const createOrder = async (req, res) => {
  const ids = req.body;
  const objectIds = [
    "64103e02d6b39782c6f78d07",
    "64103e02d6b39782c6f78d01",
    "64103e02d6b39782c6f78d26",
    "64103e02d6b39782c6f78d27",
  ];
  try {
    const response = await Menu.find(
      { foodList: { $elemMatch: { _id: { $in: objectIds } } } },
      { "foodList.$": 1 }
    );
    if (response) {
      res.json({ data: response });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createOrder };

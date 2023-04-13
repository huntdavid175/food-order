const Menu = require("../models/menu");

const { socket } = require("../socketio");

const orders = [];
const createOrder = async (req, res) => {
  const { ids } = req.body;

  // const objectIds = [
  //   "6411a6f0affc08795b724cef",
  //   "6411a6f0affc08795b724cf0",
  //   "6411a6f0affc08795b724d06",
  //   "6411a6f0affc08795b724d12",
  //   "6411a6f0affc08795b724d13",
  //   "6411a6f0affc08795b724d22",
  // ];

  try {
    const response = await Menu.find(
      { foodList: { $elemMatch: { _id: { $in: ids } } } }
      // { "foodList.$": 1 }
    );
    if (response) {
      const food = response.map((obj) => obj.foodList).flat();

      const exactFood = ids.map((id) => {
        let item;
        food.forEach((food) => {
          if (id === food._id.toString()) {
            item = food;
          }
        });
        return item;
      });

      res.json({ data: exactFood });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createOrder, orders };

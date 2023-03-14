const csv = require("csvtojson");
const path = require("path");

const csvFilePath = path.resolve(__dirname, "../foodList.csv");

const toJson = async () => {
  const jsonObj = await csv().fromFile(csvFilePath);
  const result = jsonObj.reduce((acc, item) => {
    const foundTitle = acc.find((group) => group.title === item.title);
    if (foundTitle) {
      foundTitle.foodList.push({
        foodName: item.foodName,
        price: parseInt(item.price),
      });
    } else {
      acc.push({
        title: item.title,
        foodList: [{ foodName: item.foodName, price: parseInt(item.price) }],
      });
    }
    return acc;
  }, []);

  // console.log(result);
  return result;
  // console.log(jsonObj);
};

module.exports = { toJson };

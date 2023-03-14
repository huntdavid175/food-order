const express = require("express");

const { addMenu, addManyMenu, getAllMenu } = require("../controllers/menu");

const router = express.Router();

router.post("/", addMenu);

router.post("/allmenu", addManyMenu);

router.get("/allmenu", getAllMenu);

module.exports = router;

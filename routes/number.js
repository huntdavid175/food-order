const express = require("express");

const { addNumber, getNumbers } = require("../controllers/number");

const router = express.Router();

router.post("/", addNumber);

router.get("/", getNumbers);

module.exports = router;

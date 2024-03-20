const express = require("express");
const analyseRouter = require("./analyze");

const router = express.Router();
router.use("/analyse", analyseRouter);

module.exports = router;

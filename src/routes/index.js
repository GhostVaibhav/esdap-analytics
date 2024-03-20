const express = require("express");
const analyseRouter = require("./analyze");

const router = express.Router();
router.use("/analytics", analyseRouter);

module.exports = router;

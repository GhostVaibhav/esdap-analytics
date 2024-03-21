const express = require("express");
const analyseRouter = require("./analytics");

const router = express.Router();
router.use("/analytics", analyseRouter);

module.exports = router;

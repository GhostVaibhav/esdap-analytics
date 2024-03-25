const express = require("express");
const analyseRouter = require("./analytics");

// Main router for the application
const router = express.Router();

// Mount the analytics router under the '/analytics' path
// /api/v1/analytics
router.use("/analytics", analyseRouter);


module.exports = router;

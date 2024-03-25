const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index.js");

require("dotenv").config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

// route all the requests to /api/v1 to rootRouter
// /api/v1
app.use("/api/v1", rootRouter);

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong on API Call");
});

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});

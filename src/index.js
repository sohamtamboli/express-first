const express = require("express");
const connectDB = require("../src/db/connect");
const cors = require("cors");
const HelloRoute = require("../src/routes/hello");
const CalcRoute = require("../src/routes/numbers");

const main = async () => {
	const app = express();
	const port = process.env.PORT || "4000";
	connectDB();
	app.use(cors({}));
	app.use(express.json({ extended: false }));

	app.use("/hello", HelloRoute);
	app.use("/calculator", CalcRoute);
	app.listen(port, () => {
		console.log("Server Running at port", port);
	});
};

main();

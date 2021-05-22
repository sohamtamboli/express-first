exports.HiController = (req, res) => {
	return res.send("This is HiController");
};
exports.HelloController = (req, res) => {
	return res.json({
		message: "Hello",
	});
};
exports.UserController = (req, res) => {
	return res.json({
		username: "oddHisoka",
		password: "iLoveKittens69",
	});
};

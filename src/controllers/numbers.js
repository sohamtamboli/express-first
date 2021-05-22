exports.AddController = (req, res) => {
	console.log(req.body);

	let add = req.body.num1 + req.body.num2;
	return res.json({
		result: add,
	});
};
exports.MultiplyController = (req, res) => {
	console.log(req.body);

	let multiply = req.body.num1 * req.body.num2;
	return res.json({
		result: multiply,
	});
};

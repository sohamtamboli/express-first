const express = require("express");
const {
	HiController,
	HelloController,
	UserController,
} = require("../controllers/hello");
const router = express.Router();

router.get("/", HelloController);
router.get("/hi", HiController);

router.get("/me", UserController);

module.exports = router;

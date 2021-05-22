const express = require("express");
const { AddController, MultiplyController } = require("../controllers/numbers");
const router = express.Router();

router.post("/add", AddController);
router.post("/multiply", MultiplyController);

module.exports = router;

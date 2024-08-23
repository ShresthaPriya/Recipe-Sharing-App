const express = require("express");
const router = express.Router();
const { loginUser } = require("../controller/LoginController");

router.post("/", loginUser);

module.exports = router;

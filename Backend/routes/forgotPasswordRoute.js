const express = require("express");
const router = express.Router();
const ForgotPassword = require("../controller/ForgotPasswordController.js");

router.put("/", ForgotPassword);

module.exports = router;
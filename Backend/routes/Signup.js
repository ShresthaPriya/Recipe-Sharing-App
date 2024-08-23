const express = require("express");
const router = express.Router();
const { addCredentials, getCredentials } = require("../controller/SignupController");

// Define the routes
router.get("/", getCredentials);
router.post("/", addCredentials);

module.exports = router;

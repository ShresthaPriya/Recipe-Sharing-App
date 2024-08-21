

const express = require("express");
const router = express.Router();
const { getCredentials, addCredentials } = require("../controller/LoginController");

// Define the routes
router.get("/", getCredentials);
router.post("/", addCredentials);

module.exports = router;

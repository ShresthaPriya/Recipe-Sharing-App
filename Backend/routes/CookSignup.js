const express = require("express");
const router = express.Router();
const { addCredentials, getCredentials, getUser } = require("../controller/CookSignupController");

// Define the routes
router.get("/", getCredentials);
router.post("/", addCredentials);
router.get("/:id", getUser)

module.exports = router;

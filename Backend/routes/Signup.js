const express = require("express");
const router = express.Router();
const { getCredentials, addCredentials, deleteUserCredential } = require("../controller/SignupController");

// Define the routes
router.get("/", getCredentials);
router.post("/", addCredentials);
router.delete("/:id", deleteUserCredential);

module.exports = router;

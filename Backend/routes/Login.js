const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const { loginUser } = require("../controller/LoginController");

// router.post("/", loginUser);

// module.exports = router;
const LoginController = require("../controller/LoginController");

router.post("/", LoginController);
function verifyToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.token = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token." });
  }
}

module.exports = router;

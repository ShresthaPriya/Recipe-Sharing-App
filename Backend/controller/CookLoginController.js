const User = require("../models/CookSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CookLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = jwt.sign(
      { email: user.email, _id: user._id, role: user.role }, // Include role in token
      process.env.SECRET
    );

    res.json({
      token,
      user: { _id: user._id, name: user.username, email: user.email, role: user.role }, // Include role in response
    });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = CookLogin;

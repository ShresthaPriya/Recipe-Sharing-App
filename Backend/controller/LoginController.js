// const User = require("../models/UserSchema");

// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email.' });
//         }

//         // Directly compare the provided password with the one stored in the database
//         if (user.password !== password) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//         // Passwords match, user is authenticated
//         res.status(200).json({ user });
//         console.log("Logged in successfully");

//     } catch (error) {
//         // If any error occurs, return a 500 status with the error message
//         res.status(500).json({ message: error.message });
//         console.error(error);
//     }
// };




// module.exports = { loginUser };
const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
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
      process.env.JWT_SECRET
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

module.exports = Login;

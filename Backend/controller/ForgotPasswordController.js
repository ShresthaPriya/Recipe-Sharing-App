const bcrypt = require("bcryptjs");
const User = require("../models/UserSchema");
const Cook = require("../models/CookSchema");

const ForgotPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    let role = null;

    // Check if a user with the provided email exists in either User or Cook collections
    let user = await User.findOne({ email });
    let cook = await Cook.findOne({ email });

    if (user) {
      // Hash the new password before updating it for User
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await user.save();

      role = "user";
      res.status(200).json({ message: "User password updated successfully", role });
    } else if (cook) {
      // Hash the new password before updating it for Cook
      const hashedPassword = await bcrypt.hash(password, 10);
      cook.password = hashedPassword;
      await cook.save();

      role = "cook";
      res.status(200).json({ message: "Cook password updated successfully", role });
    } else {
      // If no user or cook is found with the given email
      res
        .status(404)
        .json({ message: "No user or cook found with this email address" });
    }
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = ForgotPassword;

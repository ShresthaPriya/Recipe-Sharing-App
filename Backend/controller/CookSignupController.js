const User = require("../models/CookSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Add Credentials for Signup
const addCredentials = async (req, res) => {
    const { username, email, password, role } = req.body; // Include role in the request body

    if (!username || !email || !password || !role) { // Check for role as well
        return res.status(400).json({ success: false, error: "All fields are required." });
    }
    if (role !== "cook") { // Check if the role is not "cook"
        return res.status(400).json({ success: false, error: "Invalid role. Only 'cook' role is allowed." });
    }

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "Email already exists." });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ 
            username, 
            email, 
            password: hashedPassword, // Save the hashed password
            role // Save the role
        });

        // Create a token
        const token = jwt.sign({ email, id: newUser._id }, process.env.JWT_SECRET);

        // Exclude password from the response
        newUser.password = undefined;

        // Return the token and the new user data
        return res.status(201).json({ success: true, token, user: newUser });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Get Credentials
const getCredentials = async (req, res) => {
    try {
        const credentials = await User.find();
        return res.json({ success: true, credentials });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, error: "User not found." });
        }

        res.status(200).json({ success: true, email:user.email, role: user.role });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

module.exports = { addCredentials, getCredentials, getUser };

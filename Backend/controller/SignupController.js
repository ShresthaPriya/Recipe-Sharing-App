const User = require("../models/UserSchema"); // Ensure you're using the correct model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Add Credentials for Signup
const addCredentials = async (req, res) => {
    const { username, email, password, role } = req.body; // Include role in the request body

    if (!username || !email || !password || !role) { // Check for role as well
        return res.status(400).json({ success: false, error: "All fields are required." });
    }
    if (role !== "food enthusiast") { // Check if the role is not "food enthusiast"
        return res.status(400).json({ success: false, error: "Invalid role. Only 'food enthusiast' role is allowed." });
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

        // Exclude password from the response
        newUser.password = undefined;
        return res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Get Credentials
const getCredentials = async (req, res) => {
    try {
        const credentials = await User.find(); // Use the correct model
        return res.json({ success: true, credentials });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Delete User Credential
const deleteUserCredential = async (req, res) => {
    try {
        const userId = req.params.id;
        // Check if the id is valid
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const user = await User.findByIdAndDelete(userId); // Use the correct model

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

module.exports = { getCredentials, addCredentials, deleteUserCredential };

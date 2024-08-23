const Signup = require("../models/Signup");

// Add Credentials for Signup
const addCredentials = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }

    try {
        // Check if the email already exists
        const existingUser = await Signup.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "Email already exists." });
        }

        // Create new user
        const newUser = await Signup.create({ username, email, password });
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
        const credentials = await Signup.find();
        return res.json({ success: true, credentials });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

module.exports = { addCredentials, getCredentials };

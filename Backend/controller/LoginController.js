const Login = require("../models/Login");

// Get Credentials
const getCredentials = async (req, res) => {
    try {
        const credentials = await Login.find();
        return res.json({ success: true, credentials });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Add Credentials
const addCredentials = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ message: "Please fill the required fields." });
    }

    try {
        const newCredentials = await Login.create({ email, password });
        return res.json({success: true, newCredentials});
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

module.exports = { getCredentials, addCredentials };

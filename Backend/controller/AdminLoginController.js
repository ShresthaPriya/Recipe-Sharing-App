
const User = require('../models/AdminSchema');


const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        // Check if the user exists and the password is correct (direct comparison for simplicity here, bcrypt should be used in production)
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' }); // Generic message for both errors
        }

        // Passwords match, user is authenticated
        res.status(200).json({ user });
        console.log("Admin logged in successfully");

    } catch (error) {
        // If any error occurs, return a 500 status with the error message
        res.status(500).json({ message: error.message });
        console.error(error);
    }
};

module.exports = loginAdmin;

const Category = require("../models/Categories");

const addCategories = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Category name is required" });
        }

        const newCategory = await Category.create({ name });

        return res.status(201).json({
            message: "Category added successfully",
            category: newCategory
        });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {addCategories};

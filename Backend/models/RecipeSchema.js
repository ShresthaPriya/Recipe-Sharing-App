const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    },
    time: {
        type: String,
        // required: true
    },
    shortDescription: {
        type: String,
        required: true,
    },
    noOfServings: {
        type: String,
    },
    recipeImg: {
        data: Buffer,
        contentType: String
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model("Recipe", recipeSchema);

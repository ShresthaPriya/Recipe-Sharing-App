
const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/middleware");

// const multer = require("multer");
// const { getRecipes, getRecipeById, addRecipes, editRecipes, deleteRecipes } = require("../controller/recipeController");

// Setup multer for image uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
const {  getAllRecipes,
    createRecipe,
    deleteRecipe, editRecipe,} = require("../controller/recipeController");


// router.get("/", getAllRecipes);
router.get("/", verifyToken, getAllRecipes);

// router.get("/:id", getRecipeById);
router.post("/", createRecipe); // Upload route for adding recipes
router.put("/:id",  editRecipe); // Upload route for editing recipes
router.delete("/:id", deleteRecipe);

module.exports = router;


const express = require("express");
const router = express.Router();
const multer = require("multer");
const { getRecipes, getRecipeById, addRecipes, editRecipes, deleteRecipes } = require("../controller/recipeController");

// Setup multer for image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", upload.single('recipeImg'), addRecipes); // Upload route for adding recipes
router.put("/:id", upload.single('recipeImg'), editRecipes); // Upload route for editing recipes
router.delete("/:id", deleteRecipes);

module.exports = router;


const Recipe = require("../models/RecipeSchema")
const multer = require("multer")


// const Liked = require("../Schema/LikedRecipeSchema");
const path = require('path'); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.originalname; 
    console.log('Saving file as:', filename); // Logging filename

    cb(null, filename);
  }
});


const upload = multer({ storage: storage })

const createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, noOfServings, preparationTime, shortDescription } = req.body;
    if (!title || !ingredients || !instructions || !preparationTime) {
      return res.status(400).json({ message: "Required fields cannot be empty" });
    }

    const newRecipe = await Recipe.create({
      title,
      ingredients,
      instructions,
      noOfServings,
      preparationTime,
      shortDescription,
      imageUrl: req.file ? req.file.filename : null, // Ensure imageUrl is null if no file is uploaded
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();

    res.status(200).json(allRecipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'Recipe ID is required' });
  }
  try {
    const recipe = await Recipe.findById(id); // Assuming you're using MongoDB
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const editRecipe = async (req, res) => {
  const { title, ingredients, instructions, shortDescription, preparationTime, noOfServings } = req.body;

  try {
    // Ensure ingredients and instructions are arrays
    const ingredientsArray = typeof ingredients === 'string' ? ingredients.split(',') : ingredients;
    const instructionsArray = typeof instructions === 'string' ? instructions.split('.') : instructions;

    // Update the recipe
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, {
      title,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
      shortDescription,
      preparationTime,
      noOfServings,
      imageUrl: req.file ? req.file.filename : undefined  // Ensure imageUrl is updated if a new file is uploaded
    }, { new: true });

    if (!updatedRecipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    res.json(updatedRecipe);
  } catch (err) {
    console.error('Error updating recipe:', err);
    return res.status(400).json({ success: false, message: "Error while updating", error: err.message });
  }
};



const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const deletedRecipe = await Recipe.deleteOne({ _id: recipeId });

    if (!deletedRecipe.deletedCount) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const recipes = await Recipe.find();

    res.status(200).json({ message: "Recipe deleted successfully", recipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const LikedList = async (req, res) => {
  try {
    // Find the recipe by ID in the database
    let recipe = await Recipe.findOne({ _id: req.params.id });

    // Check if the recipe exists in the user's favorites
    const existingFavorite = await Liked.findOne({ title: recipe.title });

    if (existingFavorite) {
      // Recipe already exists in favorites
      return res
        .status(400)
        .json({ error: "Recipe already exists in your favorites" });
    } else {
      // Create a new favorite recipe entry
      const { title, instructions, imageUrl, ingredients } = recipe;
      const newFavorite = await Liked.create({
        title,
        instructions,
        imageUrl,
        ingredients,
      });

      // Respond with the newly added favorite recipe
      return res.status(201).json({ favoriteRecipe: newFavorite });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error in Liked:", error);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
};

const getAllLikedRecipes = async (req, res) => {
  try {
    const allLikedRecipes = await Liked.find();

    res.status(200).json(allLikedRecipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const removeFromLikedRecipes = async (req, res) => {
  try {
    const recipeId = req.params.id;

    // Find and delete the liked recipe by ID
    const deletedLikedRecipe = await Liked.deleteOne({ _id: recipeId });

    if (!deletedLikedRecipe.deletedCount) {
      return res.status(404).json({ error: "Liked recipe not found" });
    }

    res.status(200).json({ message: "Recipe removed from liked recipes" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const searchRecipes = async (req, res) => {
  const searchKey = req.params.key;

  try {
    // Use a case-insensitive regular expression to search for recipes by title
    const recipes = await Recipe.find({
      title: { $regex: new RegExp(searchKey, "i") },
    });

    // If no matching recipes found, return a meaningful message
    if (recipes.length === 0) {
      return res.status(404).json({ message: "No recipes found" });
    }

    // If matching recipes found, return them in the response
    res.status(200).json(recipes);
  } catch (error) {
    // Handle any server error and return a proper error response
    console.error("Error searching recipes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllRecipes,
  createRecipe,
  deleteRecipe,
  editRecipe,
  getAllLikedRecipes,
  LikedList,
  removeFromLikedRecipes,
  searchRecipes,
  getRecipeById,
  upload 
};
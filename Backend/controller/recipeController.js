// const Recipes = require("../models/RecipeSchema")

// //get all recipes
// const getRecipes = async(req, res) => {
//     try{
//        const recipes = await Recipes.find()
//         return res.json({ success: true, recipes})
//     }
//     catch(err){
//         res.status(400).json({success:false, error:err.message});
//     }
   
//   };


//   //recipes by id
//   const getRecipeById = async(req, res)=>{
   
//     const recipe = await Recipes.findById(req.params.id)
//      res.json(recipe)
//   }

//   // Add new recipe
// const addRecipes = async(req, res) => {
//   const { title, ingredients, instructions, shortDescription, time, noOfServings } = req.body;

//   if (!title || !ingredients || !shortDescription || !instructions || !noOfServings) {
//       return res.status(400).json({ message: "Please fill the required fields." });
//   }

//   const newRecipe = new Recipes({
//       title,
//       ingredients,
//       instructions,
//       shortDescription,
//       time,
//       noOfServings,
//       recipeImg: {
//           data: req.file.buffer,
//           contentType: req.file.mimetype,
//       },
//   });

//   try {
//       await newRecipe.save();
//       res.json(newRecipe);
//   } catch (err) {
//       res.status(500).json({ success: false, error: err.message });
//   }
// };

// // Edit existing recipe
// const editRecipes = async(req, res) => {
//   const { title, ingredients, instructions, shortDescription, time, noOfServings } = req.body;

//   try {
//       let recipe = await Recipes.findById(req.params.id);

//       if (!recipe) {
//           return res.status(404).json({ success: false, message: "Recipe not found" });
//       }

//       if (req.file) {
//           req.body.recipeImg = {
//               data: req.file.buffer,
//               contentType: req.file.mimetype,
//           };
//       }

//       recipe = await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       res.json(recipe);
//   } catch (err) {
//       return res.status(400).json({ success: false, message: "Error while updating", error: err.message });
//   }
// };

// // Delete recipe
// const deleteRecipes = async(req, res) => {
//   try {
//       const recipe = await Recipes.findByIdAndDelete(req.params.id);

//       if (!recipe) {
//           return res.status(404).json({ success: false, message: "Recipe not found" });
//       }

//       res.json({ success: true, message: "Recipe deleted successfully" });
//   } catch (err) {
//       res.status(400).json({ success: false, error: err.message });
//   }
// };

// module.exports = { getRecipes, getRecipeById, addRecipes, editRecipes, deleteRecipes };


const Recipe = require("../models/RecipeSchema")
// const Liked = require("../Schema/LikedRecipeSchema");

const createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, noOfServings, time, shortDescription, imageUrl } = req.body;

    const newRecipe = await Recipe.create({
      title,
      ingredients,
      instructions,
      noOfServings,
      time,
      shortDescription,
      imageUrl,
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
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

const editRecipe = async(req, res) => {
      const { title, ingredients, instructions, shortDescription, time, noOfServings } = req.body;
    
      try {
          let recipe = await Recipe.findById(req.params.id);
    
          if (!recipe) {
              return res.status(404).json({ success: false, message: "Recipe not found" });
          }
    
        //   if (req.file) {
        //       req.body.recipeImg = {
        //           data: req.file.buffer,
        //           contentType: req.file.mimetype,
        //       };
        //   }
    
          recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
          res.json(recipe);
      } catch (err) {
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

// const LikedList = async (req, res) => {
//   try {
//     // Find the recipe by ID in the database
//     let recipe = await Recipe.findOne({ _id: req.params.id });

//     // Check if the recipe exists in the user's favorites
//     const existingFavorite = await Liked.findOne({ title: recipe.title });

//     if (existingFavorite) {
//       // Recipe already exists in favorites
//       return res
//         .status(400)
//         .json({ error: "Recipe already exists in your favorites" });
//     } else {
//       // Create a new favorite recipe entry
//       const { title, instructions, imageUrl, ingredients } = recipe;
//       const newFavorite = await Liked.create({
//         title,
//         instructions,
//         imageUrl,
//         ingredients,
//       });

//       // Respond with the newly added favorite recipe
//       return res.status(201).json({ favoriteRecipe: newFavorite });
//     }
//   } catch (error) {
//     // Handle any errors that occur during the process
//     console.error("Error in Liked:", error);
//     return res.status(500).json({ error: "An internal server error occurred" });
//   }
// };

// const getAllLikedRecipes = async (req, res) => {
//   try {
//     const allLikedRecipes = await Liked.find();

//     res.status(200).json(allLikedRecipes);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// const removeFromLikedRecipes = async (req, res) => {
//   try {
//     const recipeId = req.params.id;

//     // Find and delete the liked recipe by ID
//     const deletedLikedRecipe = await Liked.deleteOne({ _id: recipeId });

//     if (!deletedLikedRecipe.deletedCount) {
//       return res.status(404).json({ error: "Liked recipe not found" });
//     }

//     res.status(200).json({ message: "Recipe removed from liked recipes" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// const searchRecipes = async (req, res) => {
//   const searchKey = req.params.key;

//   try {
//     // Use a case-insensitive regular expression to search for recipes by title
//     const recipes = await Recipe.find({
//       title: { $regex: new RegExp(searchKey, "i") },
//     });

//     // If no matching recipes found, return a meaningful message
//     if (recipes.length === 0) {
//       return res.status(404).json({ message: "No recipes found" });
//     }

//     // If matching recipes found, return them in the response
//     res.status(200).json(recipes);
//   } catch (error) {
//     // Handle any server error and return a proper error response
//     console.error("Error searching recipes:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

module.exports = {
  getAllRecipes,
  createRecipe,
  deleteRecipe,
  editRecipe,
//   getAllLikedRecipes,
//   LikedList,
//   removeFromLikedRecipes,
//   searchRecipes,
};
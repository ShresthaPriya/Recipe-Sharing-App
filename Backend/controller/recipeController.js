const Recipes = require("../models/RecipeSchema")

//get all recipes
const getRecipes = async(req, res) => {
    try{
       const recipes = await Recipes.find()
        return res.json({ success: true, recipes})
    }
    catch(err){
        res.status(400).json({success:false, error:err.message});
    }
   
  };


  //recipes by id
  const getRecipeById = async(req, res)=>{
   
    const recipe = await Recipes.findById(req.params.id)
     res.json(recipe)
  }

  // Add new recipe
const addRecipes = async(req, res) => {
  const { title, ingredients, instructions, shortDescription, time, noOfServings } = req.body;

  if (!title || !ingredients || !shortDescription || !instructions || !noOfServings) {
      return res.status(400).json({ message: "Please fill the required fields." });
  }

  const newRecipe = new Recipes({
      title,
      ingredients,
      instructions,
      shortDescription,
      time,
      noOfServings,
      recipeImg: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
      },
  });

  try {
      await newRecipe.save();
      res.json(newRecipe);
  } catch (err) {
      res.status(500).json({ success: false, error: err.message });
  }
};

// Edit existing recipe
const editRecipes = async(req, res) => {
  const { title, ingredients, instructions, shortDescription, time, noOfServings } = req.body;

  try {
      let recipe = await Recipes.findById(req.params.id);

      if (!recipe) {
          return res.status(404).json({ success: false, message: "Recipe not found" });
      }

      if (req.file) {
          req.body.recipeImg = {
              data: req.file.buffer,
              contentType: req.file.mimetype,
          };
      }

      recipe = await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(recipe);
  } catch (err) {
      return res.status(400).json({ success: false, message: "Error while updating", error: err.message });
  }
};

// Delete recipe
const deleteRecipes = async(req, res) => {
  try {
      const recipe = await Recipes.findByIdAndDelete(req.params.id);

      if (!recipe) {
          return res.status(404).json({ success: false, message: "Recipe not found" });
      }

      res.json({ success: true, message: "Recipe deleted successfully" });
  } catch (err) {
      res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = { getRecipes, getRecipeById, addRecipes, editRecipes, deleteRecipes };
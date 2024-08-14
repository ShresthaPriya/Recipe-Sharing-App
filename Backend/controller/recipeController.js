const Recipes = require("../models/recipe")
const getRecipes = async(req, res) => {
    try{
        res.json({ success: true, message: "Hello" });
    }
    catch(err){
        res.status(400).json({success:false, error:err.message});
    }
   
  };

  const getRecipeById = async(req, res)=>{
    const id = req.params.id;
    // const recipe = 
  }

  //add recipe
  const addRecipes = async(req, res) => {
    const {title, ingredients, instructions, time}= req.body
    if(!title || !ingredients || !instructions){
      res.json({message: "Please fill the required fields."})
    }
   const newRecipe = await Recipes.create({
    title, ingredients, instructions, time
   })
   return res.json(newRecipe)
   
  };

  const editRecipes = async(req, res) => {
    try{
        res.json({ success: true, message: "Hello" });
    }
    catch(err){
        res.status(400).json({success:false, error:err.message});
    }
   
  };

  const deleteRecipes = async(req, res) => {
    try{
        res.json({ success: true, message: "Hello" });
    }
    catch(err){
        res.status(400).json({success:false, error:err.message});
    }
   
  };

module.exports = {getRecipes, getRecipeById, addRecipes, editRecipes, deleteRecipes}
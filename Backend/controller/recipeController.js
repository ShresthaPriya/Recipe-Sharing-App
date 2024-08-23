const Recipes = require("../models/recipe")

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

  //add recipe
  const addRecipes = async(req, res) => {
    const {title, ingredients, instructions, shortDescription, time,noOfServings}= req.body
    if(!title || !ingredients || !shortDescription || !instructions || !noOfServings){
      res.json({message: "Please fill the required fields."})
    }
   const newRecipe = await Recipes.create({
    title, ingredients, instructions, shortDescription, time, noOfServings
   })
   return res.json(newRecipe)
   
  };

  const editRecipes = async(req, res) => {
    const {title, ingredients, instructions, shortDescription, time, noOfServings}= req.body
    let recipe = await Recipes.findById(req.params.id)
    try{
      if(recipe){
        await Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true})
          res.json({title, ingredients, shortDescription,instructions, time, noOfServings})
        
       }
    }
    catch(err){
      return res.status(404).json({success:false, message: "Error while updating"})
    }
  
   
  };

  const deleteRecipes = async(req, res) => {
    const recipe = await Recipes.findByIdAndDelete(req.params.id)
    return res.json(recipe)
    try{
        res.json({ success: true, message: "Recipe deleted successfully" });
    }
    catch(err){
        res.status(400).json({success:false, error:err.message});
    }
   
  };

module.exports = {getRecipes, getRecipeById, addRecipes, editRecipes, deleteRecipes}
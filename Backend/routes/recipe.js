const {getRecipes, getRecipeById, addRecipes, editRecipes, deleteRecipes} =require("../controller/recipeController")

const express = require("express")
const router = express.Router()
router.get("/", getRecipes)
router.get("/:id", getRecipeById)//get recipe by id
router.post("/", addRecipes) //add recipe
router.put("/:id", editRecipes) //edit recipe
router.delete("/:id", deleteRecipes) //delete recipe

module.exports=router;
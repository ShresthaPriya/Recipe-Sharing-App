const express = require("express");
const router =express.Router(); 
const {addCategories} = require("../controller/CategoriesController")

router.post("/", addCategories);

module.exports = router;
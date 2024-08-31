const express = require("express");
const router =express.Router(); 
const {addCategories, getCategories} = require("../controller/CategoriesController")

router.post("/", addCategories);
router.get("/", getCategories);

module.exports = router;
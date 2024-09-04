import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CookNavbar from '../components/CookNavbar';
import '../styles/AddRecipes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const AddFoodRecipe = () => {
  const [recipeData, setRecipeData] = useState({});
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/Categories');
        setCategories(response.data);
        
        // Pre-select category if passed from the navbar
        if (location.state && location.state.categoryName) {
          setRecipeData((prevData) => ({
            ...prevData,
            category: location.state.categoryName,
          }));
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    
    fetchCategories();
  }, [location.state]);

  const onHandleChange = (e) => {
    // let val = e.target.name === 'ingredients' ? e.target.value.split(",") : e.target.value;
    // setRecipeData((prevData) => ({ ...prevData, [e.target.name]: val }));

    const { name, value } = e.target;
    const val = (name === "ingredients") ? value.split(",") : value;
    setRecipeData((prev) => ({ ...prev, [name]: val }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:4000/recipe', recipeData);
      alert("Successfully added recipe");
      navigate('/CookHomePage'); // Navigate to the desired page
    } catch (error) {
      console.error("There was an error adding the recipe:", error);
      alert("Failed to add recipe. Please try again.");
    }
  };

  return (
    <>
      <div>
        <CookNavbar />
      </div>
      <div className="container">
        <h2>New Recipe</h2>
        <div className="add-recipe-form">
          <form onSubmit={onHandleSubmit}>
            <label>Recipe Name</label>
            <input type="text" name="title" onChange={onHandleChange} required />

            <label>Category</label>
            <select name="category" onChange={onHandleChange} value={recipeData.category || ''}>
              <option value="">Select</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>

            <label>Preparation Time</label>
            <input type="text" name="preparationTime" onChange={onHandleChange} required />

            <label>No. of Servings</label>
            <input type="text" name="noOfServings" onChange={onHandleChange} required />

            <label>Ingredients (comma separated)</label>
            <textarea name="ingredients" rows="4" onChange={onHandleChange} required />

            <label>Instructions (separate with periods)</label>
            <textarea name="instructions" rows="4" onChange={onHandleChange} required />

            <label>Short Description</label>
            <textarea name="shortDescription" rows="2" onChange={onHandleChange} required />

            <label>Image</label>
            <div className="image-upload">
              <input type="file" id="file-upload" required />
              <label htmlFor="file-upload">
                <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
                <span> Browse from device</span>
              </label>
            </div>

            <div className="action-button">
              <button type="button" onClick={() => window.location.reload()}>Cancel</button>
              <button type="submit">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFoodRecipe;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // to get the recipe ID from the URL
import CookNavbar from './CookNavbar';
import '../styles/AddRecipes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const EditRecipes = () => {
  const { id } = useParams(); // get recipe ID from the URL
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [noOfServings, setNoOfServings] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [recipeImg, setRecipeImg] = useState(null);

  useEffect(() => {
    // Fetch the recipe details when the component is mounted
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/recipe/${id}`);
        const recipe = response.data;
        setTitle(recipe.title);
        setCategory(recipe.category || '');
        const [prepTime, cookTime] = recipe.time.split(' + ');
        setPreparationTime(prepTime);
        setCookingTime(cookTime);
        setNoOfServings(recipe.noOfServings);
        setIngredients(recipe.ingredients.join(', '));
        setInstructions(recipe.instructions.join('. '));
        setShortDescription(recipe.shortDescription.join('. '));
        // Note: You may need to handle the image separately if the image is stored in the backend
      } catch (error) {
        console.error('There was an error fetching the recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const handleImageChange = (e) => {
    setRecipeImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('ingredients', ingredients.split(',').map(item => item.trim())); // Split ingredients by comma
    formData.append('instructions', instructions.split('.').map(item => item.trim())); // Split instructions by period
    formData.append('shortDescription', shortDescription);
    formData.append('time', `${preparationTime} + ${cookingTime}`);
    formData.append('noOfServings', noOfServings);
    if (recipeImg) {
      formData.append('recipeImg', recipeImg);
    }

    try {
      const response = await axios.put(`http://localhost:4000/recipe/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Recipe updated successfully");
      console.log('Recipe updated successfully:', response.data);
    } catch (error) {
      alert("Error updating recipe");
      console.error('There was an error updating the recipe:', error);
    }
  };

  return (
    <>
      <div>
        <CookNavbar />
      </div>
      <div className="container">
        <h2>Edit Recipe</h2>
        <div className="add-recipe-form">
          <form onSubmit={handleSubmit}>
            <label>Recipe Name</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>

            <label>Preparation Time</label>
            <input type="text" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} required />

            <label>Cooking Time</label>
            <input type="text" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required />

            <label>No. of Servings</label>
            <input type="text" value={noOfServings} onChange={(e) => setNoOfServings(e.target.value)} required />

            <label>Ingredients (comma separated)</label>
            <textarea rows="4" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />

            <label>Instructions (separate with periods)</label>
            <textarea rows="4" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />

            <label>Short Description</label>
            <textarea rows="2" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />

            <label>Image</label>
            <div className="image-upload">
              <input type="file" id="file-upload" onChange={handleImageChange} />
              <label htmlFor="file-upload">
                <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
                <span> Browse from device</span>
              </label>
            </div>

            <div className="action-button">
              <button type="button" onClick={() => window.location.reload()}>Cancel</button>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditRecipes;

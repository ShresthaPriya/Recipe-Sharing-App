import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CookNavbar from '../components/CookNavbar';
import '../styles/AddRecipes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const EditRecipes = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipeData, setRecipeData] = useState(null); // Initialize recipeData as null
  const [categories, setCategories] = useState([]); // Initialize categories state
  const [isLoading, setIsLoading] = useState(true); // Loading state to show loading spinner
  const navigate = useNavigate(); // For navigating programmatically

  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/Categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
  
    fetchCategories();
  }, []);
  

  // Fetch the existing recipe details based on the recipe ID
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        console.log('Recipe ID:', id); // Check the value of `id`
        const response = await axios.get(`http://localhost:4000/recipe/${id}`);
        const data = response.data;
        data.ingredients = data.ingredients.join(',');
        setRecipeData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch recipe details:', error);
        setIsLoading(false);
      }
    };
  
    fetchRecipeDetails();
  }, [id, setRecipeData]);
  

  // Handle form input changes
  const onHandleChange = (e) => {
    const { name, value, files } = e.target;

    // Handle file input separately
    if (name === 'file') {
      const file = files[0];
      setRecipeData((prev) => ({ ...prev, file: file }));
    } else {
      setRecipeData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission for updating the recipe
  const onHandleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    for (const key in recipeData) {
      if (key === 'file' && recipeData.file instanceof File) {
        formData.append(key, recipeData[key]);
      } else if (key !== 'file') {
        formData.append(key, recipeData[key]);
      }
    }
  
    try {
      await axios.put(`http://localhost:4000/recipe/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Successfully updated recipe');
      navigate('/MyRecipe'); // Navigate back to home page after successful update
    } catch (error) {
      console.error('There was an error updating the recipe:', error);
      alert('Failed to update recipe. Please try again.');
    }
  };
  

  // Display loading message while fetching recipe data
  if (isLoading) {
    return <p>Loading recipe details...</p>;
  }

  // Display error message if recipe data fails to load
  if (!recipeData) {
    return <p>Failed to load recipe details.</p>;
  }

  return (
    <>
      <CookNavbar /> {/* Navbar for navigation */}
      <div className="container">
        <h2>Edit Recipe</h2>
        <div className="add-recipe-form">
          <form onSubmit={onHandleSubmit}>
            <label>Recipe Name</label>
            <input
              type="text"
              name="title"
              value={recipeData.title || ''}
              onChange={onHandleChange}
              required
            />

            <label>Category</label>
            <select
              name="category"
              onChange={onHandleChange}
              value={recipeData?.category || ''} 
              required
            >
              <option value="">Select</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>


            <label>Cooking Time</label>
            <input
              type="text"
              name="preparationTime"
              value={recipeData.preparationTime || ''}
              onChange={onHandleChange}
              required
            />

            <label>No. of Servings</label>
            <input
              type="text"
              name="noOfServings"
              value={recipeData.noOfServings || ''}
              onChange={onHandleChange}
              required
            />

            <label>Ingredients (comma separated)</label>
            <textarea
              name="ingredients"
              rows="4"
              value={recipeData.ingredients || ''}
              onChange={onHandleChange}
              required
            />

            <label>Instructions (separate with periods)</label>
            <textarea
              name="instructions"
              rows="4"
              value={recipeData.instructions || ''}
              onChange={onHandleChange}
              required
            />

            <label>Short Description</label>
            <textarea
              name="shortDescription"
              rows="2"
              value={recipeData.shortDescription || ''}
              onChange={onHandleChange}
              required
            />

            <label>Image</label>
            <div className="image-upload">
              <input
                type="file"
                id="file-upload"
                name="file"
                onChange={onHandleChange}
              />
              <label htmlFor="file-upload">
                <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
                <span> Browse from device</span>
              </label>
              {!recipeData.file && recipeData.imageUrl && (
                <p>Current image: {recipeData.imageUrl}</p>
              )}
              {recipeData.file && <p>Selected file: {recipeData.file.name}</p>}
            </div>

            <div className="action-button">
              <button type="button" onClick={() => navigate('/CookHomePage')}>
                Cancel
              </button>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditRecipes;

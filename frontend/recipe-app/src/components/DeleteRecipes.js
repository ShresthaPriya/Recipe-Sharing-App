import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/DelRecipe.css'
import axios from "axios";

const DeleteRecipes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const deleteRecipe = location.state?.deleteRecipe; // Retrieve deleteRecipe function from the passed state

  const handleDelete = async () => {
    try {
      // Call the deleteRecipe function if it exists (passed from AllRecipesCookHome)
      if (deleteRecipe) {
        await deleteRecipe(id);
      } else {
        await axios.delete(`http://localhost:4000/recipe/${id}`);
      }
      alert('Recipe deleted successfully');
      navigate('/MyRecipe'); // Redirect to home after deletion
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const handleCancel = () => {
    // Navigate back without deleting
    navigate('/MyRecipe');
  };

  return (
    <div className="container">
      <div className="delete-overlay">
        <h2>Delete Recipe</h2>        
        <img src="https://img.icons8.com/?size=100&id=109470&format=png&color=000000" alt="Delete Image" className="delete-image" />
        <p>Are you sure you want to delete this recipe?</p>
        <div className="actionBtn">
        <button  className="delete-button" onClick={handleDelete} >Delete</button>
        <button className="cancel-button" onClick={handleCancel}  >Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteRecipes;

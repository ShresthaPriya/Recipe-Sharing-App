import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Use useLocation for current path
import '../styles/AllRecipesHomeCook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { IoIosStopwatch } from "react-icons/io";

import { AppContext } from '../App';
import axios from 'axios';

const AllRecipesCookHome = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to get current path
  const { title, setTitle } = useContext(AppContext);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/recipe');
      setRecipes(response.data); 
    } catch (err) {
      setError('Failed to load recipes');
    } finally {
      setIsLoading(false);
    }
  };

  const editRecipe = (id) => {
    // Navigate to the edit page for the given recipe
    navigate(`/EditRecipes/${id}`);
  };

  const deleteRecipe = (id) => {
    // Implement the delete functionality here
    console.log(`Delete recipe with id: ${id}`);
    navigate(`/DeleteRecipes/${id}`);
  };

  if (isLoading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  const isMyRecipePage = location.pathname === "/MyRecipe";

  return (
    <>
      <h3>All Recipes</h3>
      <div className="trending-recipes">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <img src={`http://localhost:4000/images/${recipe.imageUrl}`} alt={recipe.title} className="recipe-image" />
            <h3>{recipe.title}</h3>
            <div className="info">
              <p>{recipe.shortDescription || 0}</p>
            </div>

            <div className="recipe-actions">
              {!isMyRecipePage ? (
                <div className='timer'> 
                  <IoIosStopwatch /> {recipe.preparationTime}
                </div>
              ) : (
                <>
                  <button style={{ 
                    backgroundColor: '#4CAF50', /* Default background color */
                    border: '2px solid #4CAF50', /* Default border color */
                    color: 'white', /* Default icon color */
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, border-color 0.3s, color 0.3s' /* Smooth transitions for color changes */
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = '#4CAF50';
                    e.currentTarget.style.color = '#4CAF50'; /* Change icon color on hover */
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#4CAF50';
                    e.currentTarget.style.borderColor = '#4CAF50';
                    e.currentTarget.style.color = 'white'; /* Reset icon color */
                  }} onClick={() => editRecipe(recipe._id)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button style={{ 
                    backgroundColor: 'red', /* Default background color */
                    border: '2px solid red', /* Default border color */
                    color: 'white', /* Default icon color */
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, border-color 0.3s, color 0.3s' /* Smooth transitions for color changes */
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'red';
                    e.currentTarget.style.color = 'red'; /* Change icon color on hover */
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'red';
                    e.currentTarget.style.borderColor = 'red';
                    e.currentTarget.style.color = 'white'; /* Reset icon color */
                  }} onClick={() => deleteRecipe(recipe._id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllRecipesCookHome;

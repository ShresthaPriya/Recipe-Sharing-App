import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AllRecipesHomeCook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash, faPen  } from '@fortawesome/free-solid-svg-icons';

function AllRecipesCookHome() {
  const navigate = useNavigate();

  const viewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  const editRecipe = (id) => {
    // Edit recipe logic
  };

  const deleteRecipe = (id) => {
    // Delete recipe logic
  };

  return (
    <>
      <h3>All Recipes</h3>
      <div className="trending-recipes">
        <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>Easy Baked Salmon</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-1')}>
            {/* <FontAwesomeIcon icon="fa-solid fa-pen" /> */}
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/gingerbread-cupcakes.jpg')} alt="Gingerbread Cupcake" className="recipe-image" />
          <h3>Gingerbread Cupcake</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/hash-brown-omelet.webp')} alt="Hash Brown and Bacon Omelet" className="recipe-image" />
          <h3>Hash Brown and Bacon Omelet</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>Easy Baked Salmon</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>Easy Baked Salmon</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
         <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>Easy Baked Salmon</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
    
      </div>
    </>
  );
}

export default AllRecipesCookHome;

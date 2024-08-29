import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AllRecipesHomeCook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../App';
import { useContext } from 'react';

const AllRecipesCookHome=({recipes})=> {
 const navigate = useNavigate();
 const {title, setTitle} = useContext(AppContext)

  const editRecipe = (id) => {
    // Logic for editing the recipe with the given id
    navigate(`/EditRecipe/${id}`); // Example: navigate to the edit page
  };

  const deleteRecipe = (id) => {
    // Logic for deleting the recipe with the given id
    navigate(`/DeleteRecipes/${id}`)
    console.log(`Delete recipe with id: ${id}`);
    // Implement the delete functionality
  };

  return (
    <>
      <h3>All Recipes</h3>
      <div className="trending-recipes">
        <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>{title.id==="66c83daf152ea563e557d126"}</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('66c83daf152ea563e557d126')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('66c83daf152ea563e557d126')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/gingerbread-cupcakes.jpg')} alt="Gingerbread Cupcake" className="recipe-image" />
          <h3>{title.id}</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-2')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-2')}>
              <FontAwesomeIcon icon={faTrashAlt} />
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
            <button onClick={() => editRecipe('recipe-id-3')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-3')}>
              <FontAwesomeIcon icon={faTrashAlt} />
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
            <button onClick={() => editRecipe('recipe-id-4')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-4')}>
              <FontAwesomeIcon icon={faTrashAlt} />
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
            <button onClick={() => editRecipe('recipe-id-5')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-5')}>
              <FontAwesomeIcon icon={faTrashAlt} />
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
            <button onClick={() => editRecipe('recipe-id-6')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-6')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllRecipesCookHome;

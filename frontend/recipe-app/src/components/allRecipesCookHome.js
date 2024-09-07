import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AllRecipesHomeCook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../App';
import { useContext} from 'react';

const AllRecipesCookHome=({recipes})=> {
 const navigate = useNavigate();
 const {title, setTitle} = useContext(AppContext)
 const {img, setImg} = useState()

  const editRecipe = (id) => {
    // Logic for editing the recipe with the given id
    navigate(`/EditRecipes/${id}`); // Example: navigate to the edit page
  };

  const deleteRecipe = (id) => {
    // Logic for deleting the recipe with the given id
    navigate(`/DeleteRecipes/${id}`)
    console.log(`Delete recipe with id: ${id}`);
    // Implement the delete functionality
  };

  const fetchRecipes = async()=>{
    try {
      const response = await axios.get('http://localhost:4000/recipe');
      setTitle(response.data);
    } catch (err) {
      setError('Failed to load categories');
    } finally {
      setIsLoading(false);
    }
  }

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
            <button onClick={() => editRecipe()}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe()}>
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

// import React, { useEffect, useState } from "react";
// import "../styles/RecipeStyle.css";
// import { Link } from "react-router-dom";
// import "../styles/Searchbar.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

// const allRecipesCookHome = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     getRecipes();
//   }, []);

//   const getRecipes = () => {
//     fetch("http://localhost:4000/recipe", {
//       method: "GET",
//       headers: {
//         Authorization: `${localStorage.getItem("token")}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch recipe data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setRecipes(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleDeleteRecipe = async (recipeId) => {
//     try {
//       // Confirm the deletion with the user
//       if (window.confirm("Are you sure you want to delete this recipe?")) {
//         // Send a DELETE request to the server
//         const response = await fetch(
//           `http://localhost:4000/recipe/${recipeId}`,
//           {
//             method: "DELETE",
//           }
//         );

//         if (response.ok) {
//           toast.success("Recipe deleted successfully");

//           setTimeout(() => {
//             window.location = "/allRecipesCookHome";
//           }, 4000);
//         } else {
//           getRecipes();
//           window.location = "/allRecipesCookHome";
//         }
//       }
//     } catch (error) {
//       toast.error("An error occurred while deleting the recipe:", error);

//       setTimeout(() => {
//         window.location.href = "/allRecipesCookHome";
//       }, 3000);
//     }
//   };

//   const handleAddToFavorites = async (recipeId) => {
//     try {
//       // Send a POST request to the LikedList controller
//       const response = await fetch(
//         `https://recipe-app-mern.onrender.com/auth/likedRecipes/${recipeId}`,
//         {
//           method: "POST",
//         }
//       );

//       if (response.ok) {
//         toast.success("Recipe added to favorites successfully");

//         setTimeout(() => {
//           window.location.href = "/favouriteRecipes";
//         }, 4000);
//       } else {
//         const data = await response.json();
//         if (data.error === "Recipe already exists in your favorites") {
//           toast.warn("Recipe already exists in your favorites");
//         } else {
//           toast.error(data.error);
//         }
//       }
//     } catch (error) {
//       console.error("An error occurred while adding to favorites:", error);
//     }
//   };

//   const SearchRecipes = async (e) => {
//     try {
//       if (e.target.value) {
//         let Searchedrecipes = await fetch(
//           `https://recipe-app-mern.onrender.com/auth/searchRecipes/${e.target.value}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         Searchedrecipes = await Searchedrecipes.json();

//         if (!Searchedrecipes.message) {
//           setRecipes(Searchedrecipes);
//         } else {
//           setRecipes([]);
//         }
//       } else {
//         getRecipes();
//       }
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   return (
//     <div className="Recipes">
//       <div className="search-bar">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search recipes"
//           onChange={(e) => SearchRecipes(e)}
//         />
//       </div>

//       {recipes.length > 0 ? (
//         recipes.map((recipe) => (
//           <div key={recipe._id} className="Recipe">
//             <h2>{recipe.title}</h2>
//             <img src={recipe.imageUrl} alt={recipe.title} />
//             <h3>Ingredients:</h3>
//             <ul>
//               {recipe.ingredients.length > 0 && (
//                 <ul>
//                   {recipe.ingredients.map((ingredient, index) => (
//                     <li key={index}>{ingredient}</li>
//                   ))}
//                 </ul>
//               )}
//             </ul>
//             <div className="instructions-container">
//               <h3>Instructions:</h3>
//               {recipe.instructions.match(/^\d+\./) ? (
//                 <div className="instructions-text">
//                   {recipe.instructions.split("\n").map((step, index) => (
//                     <p key={index}>{step}</p>
//                   ))}
//                 </div>
//               ) : (
//                 <ol className="instructions-list">
//                   {recipe.instructions.split("\n").map((step, index) => (
//                     <li key={index}>{step}</li>
//                   ))}
//                 </ol>
//               )}
//             </div>

//             <button
//               className="delete-button"
//               onClick={() => handleDeleteRecipe(recipe._id)}
//             >
//               Delete
//             </button>
//             <button
//               className="add-to-favorites-button"
//               onClick={() => handleAddToFavorites(recipe._id)}
//             >
//               Add to Favorites
//             </button>
//             <Link to={"/addRecipe"}>Add more recipes</Link>
//           </div>
//         ))
//       ) : (
//         <h2 className="no-recipes">No Recipes Found</h2>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default allRecipesCookHome;

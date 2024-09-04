// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useNavigate} from 'react-router-dom';
// import axios from 'axios';
// import '../styles/Navbar.css';
// import { AppContext } from '../App';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import Categories from './Categories';
// import AddFoodRecipe from '../pages/AddFoodRecipe';

// function CookNavbar() {
//   const { username } = useContext(AppContext);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/Categories');
//         setCategories(response.data);
//       } catch (err) {
//         setError('Failed to load categories');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // const handleAddRecipeClick = (categoryName)=>{
//   //   navigate(`/AddRecipesForm`, {state:{categoryName}});
//   // }

//   const handleAddRecipeClick = (categoryName)=>{
//     navigate(`/AddFoodRecipe`, {state:{categoryName}});
//   }

//   useEffect(() => {
//     console.log('Username in Navbar:', username); // Debugging: Check if username is set
//   }, [username]);

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h1>Bon Appetit</h1>
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/allRecipesCookHome">My Recipes</Link></li>
//         <li><Link to="/Categories">Add Recipe</Link></li>
//         </ul>
        
//         {/* <Categories /> */}
     
//         <div className="search-and-profile">
//         <input type="text" placeholder="Search for recipes..." />
//         <div className="profile-icon">
//           <i className="fa-solid fa-user"></i>
//         </div>
//         {username && <span>{username}</span>} {/* Display the username */}
//       </div>
     
//     </nav>
//   );
// }

// export default CookNavbar;

import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Navbar.css';
import { AppContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Categories from './Categories';
import '../styles/Categories.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import AddFoodRecipe from '../pages/AddFoodRecipe';

function CookNavbar() {
  const { username } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/Categories');
        setCategories(response.data);
      } catch (err) {
        setError('Failed to load categories');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddRecipeClick = (categoryName) => {
    navigate(`/AddFoodRecipe`, { state: { categoryName } });
  };

  useEffect(() => {
    console.log('Username in Navbar:', username); // Debugging: Check if username is set
  }, [username]);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Bon Appetit</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/allRecipesCookHome">My Recipes</Link></li>
        {/* This should trigger the dropdown */}
        <li>
          <span onClick={toggleDropdown} className="dropdown-toggle">Add Recipe</span>
          {/* Conditionally render the dropdown */}
          {isDropdownOpen && (
            <li 
            className="categories-dropdown" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-link"></div>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                {categories.map((category) => (
                <li key={category._id} onClick={() => handleAddRecipeClick(category.name)}>
                  {category.name} <FontAwesomeIcon icon={faCirclePlus} />
                </li>
              ))}
              </ul>
            )}
          </li>
          )}
        </li>
      </ul>

      <div className="search-and-profile">
       <input type="text" placeholder="Search for recipes..." />
        <div className="profile-icon">
         <i className="fa-solid fa-user"></i>
        </div>
       {username && <span>{username}</span>} {/* Display the username */}
     </div>
    </nav>
  );
}

export default CookNavbar;


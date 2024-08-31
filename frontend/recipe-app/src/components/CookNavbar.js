import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/Navbar.css';
import { AppContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Categories from './Categories';

function CookNavbar() {
  const { username } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const handleAddRecipeClick = (categoryName)=>{
    navigate(`/AddRecipesForm`, {state:{categoryName}});
  }

  useEffect(() => {
    console.log('Username in Navbar:', username); // Debugging: Check if username is set
  }, [username]);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Bon Appetit</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/allRecipesCookHome">My Recipes</Link></li></ul>
        <Categories />
     
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

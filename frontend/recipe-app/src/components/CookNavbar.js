import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Navbar.css';
import { AppContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function CookNavbar() {
  const { username } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/categories');
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
        <li className="dropdown">
          <div onClick={toggleDropdown} className="dropdown-button">
            Add Recipes
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              {isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                categories.map((category) => (
                  <div key={category.id} className="dropdown-item">
                    <span>{category.name}</span>
                    <button className="add-button">+</button>
                  </div>
                ))
              )}
            </div>
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

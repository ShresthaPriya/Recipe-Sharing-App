import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import Categories from './Categories';
import { AppContext } from "../App";
import { useContext } from "react";


function Navbar() {
  const { username } = useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Bon Appétit</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <Categories />
        <li><Link to="/saved">Saved</Link></li>
        <li><Link to="/meal-plan">Meal Plan</Link></li>
        <li><Link to="/shopping-list">Shopping List</Link></li>
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

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Bon Apetit</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/saved">Saved</Link></li>
        <li><Link to="/meal-plan">Meal Plan</Link></li>
        <li><Link to="/shopping-list">Shopping List</Link></li>
      </ul>
      <div className="search-and-profile">
        <input type="text" placeholder="Search for recipes..." />
        <div className="profile-icon">
        <i class="fa-solid fa-user"></i></div> {/* Profile icon here */}
      </div>
    </nav>
  );
}

export default Navbar;

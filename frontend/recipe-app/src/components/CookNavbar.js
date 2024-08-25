import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 


function CookNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Bon Apetit</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/allRecipesCookHome">My Recipes</Link></li>
        <li><Link to="/AddRecipes">Add Recipes</Link></li>
      
      </ul>
      <div className="search-and-profile">
        <input type="text" placeholder="Search for recipes..." />
        <div className="profile-icon">
        <i class="fa-solid fa-user"></i></div> {/* Profile icon here */}
      </div>
    </nav>
  );
}

export default CookNavbar;

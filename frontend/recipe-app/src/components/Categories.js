// src/components/Categories.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';

function Categories() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <li 
      className="categories-dropdown" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/recipes" className="dropdown-link">Recipes</Link>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/recipes/dinner">Dinner</Link></li>
          <li><Link to="/recipes/breakfast">Breakfast</Link></li>
          <li><Link to="/recipes/lunch">Lunch</Link></li>
          <li><Link to="/recipes/snacks">Snacks</Link></li>
        </ul>
      )}
    </li>
  );
}

export default Categories;

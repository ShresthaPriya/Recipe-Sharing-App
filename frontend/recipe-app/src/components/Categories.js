import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


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
      <div className="dropdown-link"></div>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/AddRecipesForm">
              Dinner <FontAwesomeIcon icon={faCirclePlus} />
            </Link>
          </li>
          <li>
            <Link to="/AddRecipesForm">
              Breakfast <FontAwesomeIcon icon={faCirclePlus} />
            </Link>
          </li>
          <li>
            <Link to="/AddRecipesForm">
              Lunch <FontAwesomeIcon icon={faCirclePlus} />
            </Link>
          </li>
          <li>
            <Link to="/AddRecipesForm">
              Snacks <FontAwesomeIcon icon={faCirclePlus} />
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default Categories;

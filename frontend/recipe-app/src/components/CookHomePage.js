import React from 'react';
import { useEffect, useState } from 'react';
// import Navbar from './Navbar';

import axios from 'axios'
import AllRecipesCookHome from './allRecipesCookHome';
import CookNavbar from './CookNavbar';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/recipe');
        setRecipes(response.data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
  
    <div>
         
        
      <CookNavbar/>
      <AllRecipesCookHome />
      
    </div>
  );
}

export default Home;

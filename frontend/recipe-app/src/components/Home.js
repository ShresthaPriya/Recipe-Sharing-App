import React from 'react';
import { useEffect, useState } from 'react';
// import Navbar from './Navbar';
import TrendingRecipe from './TrendingRecipe';
import ExploreRecipe from './ExploreRecipe';
import axios from 'axios'

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
         
        
      {/* <Navbar /> */}
      <TrendingRecipe />
      <ExploreRecipe/>
    </div>
  );
}

export default Home;

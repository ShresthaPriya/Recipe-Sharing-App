import React from 'react';
// import Navbar from './Navbar';
import TrendingRecipe from './TrendingRecipe';
import ExploreRecipe from './ExploreRecipe';

function Home() {
  return (
    <div>
         <h1>Welcome to the Home Page</h1>
         <p>This is the home page content.</p>
      {/* <Navbar /> */}
      <TrendingRecipe />
      <ExploreRecipe/>
    </div>
  );
}

export default Home;

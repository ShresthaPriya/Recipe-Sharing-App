import React from 'react';
import RecipeCard from './RecipeCard'; // Adjust the path as needed

function TrendingRecipe() {
  return (
    <div className="trending-recipes">
      <h2>What’s Trending Now?</h2>
      <div className="recipe-grid">
        <RecipeCard
          image={require('../images/salmon.webp')}
          title="Delicious Recipe 1"
          ordered="1234"
          reviews="567"
          rating="4.5"
          buttonText="View Recipe"
        />
        <RecipeCard
          image={require('../images/gingerbread-cupcakes.jpg')}
          title="Delicious Recipe 2"
          ordered="2345"
          reviews="678"
          rating="4.8"
          buttonText="View Recipe"
        />
        <RecipeCard
          image={require('../images/hash-brown-omelet.webp')}
          title="Delicious Recipe 3"
          ordered="3456"
          reviews="789"
          rating="4.7"
          buttonText="View Recipe"
        />
        <RecipeCard
          image="path/to/image4.jpg"
          title="Delicious Recipe 4"
          ordered="4567"
          reviews="890"
          rating="4.6"
          buttonText="View Recipe"
        />
      </div>
    </div>
  );
}

export default TrendingRecipe;

import React from 'react';
import '../styles/ExploreRecipe.css';
import RecipeCard from './RecipeCard';

function ExploreRecipe() {
    return (
        <div className="explore-recipes">
            <h2>Explore Recipes</h2>
            <div className="recipe-grid">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </div>
    );
}

export default ExploreRecipe;

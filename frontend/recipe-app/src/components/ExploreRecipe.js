import React from 'react';
import '../styles/ExploreRecipe.css';
// import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

function ExploreRecipe() {
    const navigate = useNavigate();

    const viewRecipe = (id) => {
      navigate(`/recipe/${id}`);
    };
    return (
        <>
        <h2>Explore Recipes</h2>
        <div className="explore-recipes">
           
            <div className="recipe-grid">
                <img src={require('../images/Ghar.jpg')} alt="Smoothie" className="recipe-image"/>
                <h2>Fruit and Yougurt Smoothie</h2>
                <div className='info'>
                    <p>Easy Healthy Baked Salmon! Made with lemon and garlic for incredible flavor and baked in the oven for flaky tenderness.
                    </p>
                    <p>4.5 ★★★★</p>
                </div>
                <button onClick={()=>viewRecipe('recipe-id-1')}>View Recipe</button>

            </div>
            <div className="recipe-grid">
                <img src={require('../images/fruitandyogurtsmoothie.webp')} alt="Smoothie" className="recipe-image"/>
                <h2>Fruit and Yougurt Smoothie</h2>
                <div className='info'>
                    <p>This yogurt smoothie recipe is delicious! You may substitute the strawberries for any other berries or fruit.
                    </p>
                    <p>4.5 ★★★★</p>
                </div>
                <button onClick={()=>viewRecipe('recipe-id-2')}>View Recipe</button>

            </div>
            <div className="recipe-grid">
                <img src={require('../images/splash.jpg')} alt="Smoothie" className="recipe-image"/>
                <h2>Fruit and Yougurt Smoothie</h2>
                <div className='info'>
                    <p>This pico de gallo is loaded with freshly chopped tomatoes, red onion, jalapeño, and cilantro.</p>
                    <p>4.5 ★★★★</p>
                </div>
                <button onClick={()=>viewRecipe('recipe-id-3')}>View Recipe</button>

            </div>
        </div>
        </>
    );
}

export default ExploreRecipe;

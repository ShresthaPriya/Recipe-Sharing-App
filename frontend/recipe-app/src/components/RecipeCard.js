import React from 'react';
import '../styles/RecipeCard.css'; // Add your styles here

function RecipeCard({ image, title, ordered, reviews, rating, buttonText }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h3>{title}</h3>
      <p>{ordered} ordered</p>
      <p>{reviews} reviews</p>
      <p>{rating} ★</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default RecipeCard;

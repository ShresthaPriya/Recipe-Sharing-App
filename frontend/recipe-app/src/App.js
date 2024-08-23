// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipeCard from './components/RecipeCard';
import TrendingRecipe from './components/TrendingRecipe';
import ExploreRecipe from './components/ExploreRecipe';
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/Signup';
import RecipeDetails from './components/RecipeDetails';
// import Categories from './components/Categories';
import AllRecipesCookHome from './components/allRecipesCookHome';
import CookHomePage from './components/CookHomePage';
import AddRecipes from './components/AddRecipes';

function App() {
  return (
    <div className='App'>
    <Router>
      {/* <Navbar/> */}
      <Routes>
      {/* <Route path='/' element={<Login/>}/> */}
      <Route path='/' element={<Splash/>}/>
      <Route path='/Home' element={<Home />} />
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path= '/TrendingRecipe' element={<TrendingRecipe/>}/>
      <Route path= '/ExploreRecipe' element={<ExploreRecipe/>}/>
      <Route path= '/RecipeCard' element={<RecipeCard/>}/>
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      
      {/* <Route path='/Categories' element={<Categories/>}/> */}

      {/* <Route path='/Recipes' element={<Recipes/>}/> */}

        {/* Add more routes as needed */}
        <Route path= '/CookHomePage' element={<CookHomePage/>}/>
      <Route path= '/allRecipesCookHome' element={<allRecipesCookHome/>}/>
      <Route path="/AddRecipes" element={<AddRecipes/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

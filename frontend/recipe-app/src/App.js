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
// import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
      {/* <Route path='/' element={<Login/>}/> */}
      <Route path='/' element={<Splash/>}/>
      <Route path='/Home' element={<Home />} />
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path= '/TrendingRecipe' element={<TrendingRecipe/>}/>
      <Route path= '/ExploreRecipe' element={<ExploreRecipe/>}/>
      <Route path= '/RecipeCard' element={<RecipeCard/>}/>

        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;

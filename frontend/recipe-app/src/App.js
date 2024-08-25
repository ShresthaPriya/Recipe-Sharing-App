import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeCard from './components/RecipeCard';
import TrendingRecipe from './components/TrendingRecipe';
import ExploreRecipe from './components/ExploreRecipe';
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/Signup';
import RecipeDetails from './components/RecipeDetails';
import CookHomePage from './components/CookHomePage';
import AddRecipes from './components/AddRecipes';
import EditRecipes from './components/EditRecipes';
import ProfileDetails from './components/ProfileDetails';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from 'axios';
import allRecipesCookHome from './components/allRecipesCookHome';
import Navbar from './components/Navbar';
import ForgotPassword from "./components/forgotPassword";

export const AppContext = createContext();

// const getAllRecipes = async () => {
//   try {
//     const response = await axios.get('http://localhost:4000/recipe');
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching recipes:", error);
//     return [];
//   }
// };

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState(""); 

  return (
    <div className='App'>
      
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          
          <Router>
            <Routes>
              <Route path='/' element={<Splash />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/TrendingRecipe' element={<TrendingRecipe />} />
              <Route path='/ExploreRecipe' element={<ExploreRecipe />} />
              <Route path='/RecipeCard' element={<RecipeCard />} />
              <Route path='/recipe/:id' element={<RecipeDetails />} />
              <Route path='/ProfileDetails' element={<ProfileDetails />} />
              <Route path='/CookHomePage' element={<CookHomePage />} />
              <Route path='/AddRecipes' element={<AddRecipes />} />
              <Route path='/EditRecipes' element={<EditRecipes />} />
              <Route path='/allRecipesCookHome' element={<allRecipesCookHome/>}/>
              <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

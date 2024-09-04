import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';  // Import useLoaderData if using it in components
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import Home from './components/Home';
import RecipeCard from './components/RecipeCard';
import Splash from './components/Splash';
import Login from './components/Login';
import CookLogin from './components/CookLogin';
import AdminLogin from './components/AdminLogin';
import Signup from './components/Signup';
import RecipeDetails from './components/RecipeDetails';
import CookHomePage from './components/CookHomePage';
// import AddRecipes from './components/AddRecipes';
import EditRecipes from './components/EditRecipes';
import ProfileDetails from './components/ProfileDetails';
// import allRecipesCookHome from './components/allRecipesCookHome';
import ForgotPassword from "./components/forgotPassword";
// import AddRecipesForm from './components/AddRecipesForm';
import AddFoodRecipe from './pages/AddFoodRecipe';

export const AppContext = createContext();

const getAllRecipes = async () => {
  let allRecipes=[]
  await axios.get('http://localhost:4000/recipe').then(res=>{
    allRecipes=res.data
  })
    return allRecipes
  } 

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState(" "); 
  const [title, setTitle] = useState(" ");

  return (
    <div className='App'>
      
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername, title, setTitle }}>
          
          <Router>
            <Routes>
              <Route path='/' element={<Splash />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/CookLogin' element={<CookLogin />} />
              <Route path='/AdminLogin' element={<AdminLogin />} />
              <Route path='/RecipeCard' element={<RecipeCard />} />
              <Route path='/recipe/:id' element={<RecipeDetails />} />
              <Route path='/ProfileDetails' element={<ProfileDetails />} />
              <Route path='/CookHomePage' element={<CookHomePage />} loader={getAllRecipes} />
              {/* <Route path='/AddRecipesForm' element={<AddRecipesForm />} /> */}
              <Route path='/EditRecipes' element={<EditRecipes />} />
              <Route path='/allRecipesCookHome' element={<allRecipesCookHome/>}/>
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/AddFoodRecipe" element={<AddFoodRecipe/>}/>
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

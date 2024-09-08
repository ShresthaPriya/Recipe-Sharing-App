# Recipe Sharing App

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [User Roles](#user-roles)


## Overview
This is a full-stack Recipe Sharing App built using the MERN (MongoDB, Express, React, Node.js) stack. Users can share and explore various recipes, with distinct roles providing different functionalities.

## Features
- **Authentication & Authorization**: User sign-up, login, and role management (Cook, Food Enthusiast, Admin).
- **Recipe Management**: Cooks can add, edit, and delete recipes.
- **Recipe Search**: Food Enthusiasts can search for recipes by titles or categories.
- **Favorite Recipes**: Users can like and save their favorite recipes.
- **Admin Dashboard**: Admins can manage users and recipes.
- **Image Upload**: Users can upload images of their recipes.


## Technologies Used
### Frontend:
- **React.js**: For building the user interface.
- **Axios**: For API requests.
- **React Router**: For client-side routing.
- **CSS**: For styling.

### Backend:
- **Node.js**: For server-side logic.
- **Express.js**: For handling API routes.
- **Multer**: For image uploads.
- **JSON Web Tokens (JWT)**: For authentication
- **bycrypt**: bcrypt for secured password hashing

### Database:
- **MongoDB**: For storing users, recipes, and other data.
- **Mongoose**: For MongoDB schema and model management.

## Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ShresthaPriya/Recipe-Sharing-App.git
    cd recipe-sharing-app
    ```

2. **Install dependencies** for both the frontend and backend:
    ```bash

# For the frontend
cd frontend
npx create-react-app recipe-app
npm install

# For the backend
cd ../Backend
npm install


3. **Environment Variables**: Create a `.env` file in the `server` directory with the following configuration:
    ```bash
    MONGO_URI=mongodb://localhost:YOUR_MONGODB URI
    JWT_SECRET=your_jwt_secret
    PORT=4000
    ```

4. **Start the server**:
    ```bash
    cd backend
    nodemon server.js
    ```

5. **Start the client**:
    ```bash
    cd frontend
    cd recipe-app
    npm start
    ```

### User roles:
- **Admin**: Manage users, recipe and recipe categories.
- **FoodEnthusiast**: Can browse, search,
- like, and save recipes as well as provide reviews and rating.
- **Cook**: Can add, delete and edit the recipe.

  ### Screenshots


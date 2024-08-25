const express = require("express"); 
const app = express(); 
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const router = express.Router();


const recipe = require("./routes/recipe");
const loginRouter = require("./routes/Login");
const signUpRouter = require("./routes/Signup");
const forgotPasswordRouter = require('./routes/forgotPasswordRoute');
const verifyToken = require("./middleware/Middleware");
const Home = require("./controller/controller");

// Importing DB function
const connectDB = require("./config/databaseConnect");

const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

app.use("/recipe", recipe);
app.use("/Login", loginRouter);
app.use("/Signup", signUpRouter);
app.use("/forgotPassword", forgotPasswordRouter);

router.get("/", verifyToken, Home.Home);

const startServer = async () => {  
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();

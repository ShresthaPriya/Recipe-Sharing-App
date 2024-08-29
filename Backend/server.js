const express = require("express"); 
const app = express(); 
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const router = express.Router();


const recipe = require("./routes/recipe");
const loginRouter = require("./routes/UserLogin");
const adminLoginRouter = require("./routes/AdminLogin");
const CookloginRouter = require("./routes/CookLogin")
const CookSignupRouter = require("./routes/CookSignup")
const signUpRouter = require("./routes/Signup");
const forgotPasswordRouter = require('./routes/forgotPasswordRoute');
const CategoriesRouter = require("./routes/Categories")

const verifyToken = require("./middleware/Middleware");
const Home = require("./controller/controller");

// Importing DB function
const connectDB = require("./config/databaseConnect");

const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

app.use("/recipe", recipe);
app.use("/UserLogin", loginRouter);
app.use("/AdminLogin",adminLoginRouter);
app.use("/CookLogin" , CookloginRouter);
app.use("/Signup", signUpRouter);
app.use("/CookSignup", CookSignupRouter);
app.use("/forgotPassword", forgotPasswordRouter);
app.use("/Categories", CategoriesRouter);

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

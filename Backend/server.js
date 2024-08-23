const express = require("express"); 
const app = express(); 
const dotenv = require("dotenv").config();
const recipe = require("./routes/recipe");
const loginRouter = require("./routes/Login");
const signUpRouter = require("./routes/Signup");
const cors = require('cors');

// Importing DB function
const connectDB = require("./config/databaseConnect");

const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

app.use("/recipe", recipe);
app.use("/Login", loginRouter);
app.use("/Signup", signUpRouter);

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

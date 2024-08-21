const express = require("express"); // Importing express
const app = express(); // Calling express 
const dotenv = require("dotenv").config();
const recipe = require("./routes/recipe");
const loginRouter = require("./routes/Login")
const cors = require('cors');



//importing DB function
const connectDB = require("./config/databaseConnect")

const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json()); 
app.use(cors());

app.use("/recipe", recipe); // Use the recipe router
app.use("/Login", loginRouter);


const startServer = async () => {   // servers runs only after the database is connected
  try{
      await connectDB();
      app.listen(PORT, () => {
          console.log(`Server started in port ${PORT}`);
      });
  } catch(err){
      console.log(err);
      process.exit(1);
  }
};
startServer();

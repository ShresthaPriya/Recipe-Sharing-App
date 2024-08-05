const express = require("express"); // Importing express
const app = express(); // Calling express 
const dotenv = require("dotenv").config();
const recipe = require("./routes/recipe");

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON

app.use("/", recipe); // Use the recipe router

app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Starting server on port ${PORT}`);
  }
});

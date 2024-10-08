const mongoose = require("mongoose")
async function connectDB(){
    try{
        const connectionInstallation = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${connectionInstallation.connection.host}`);
    }
    catch(err){
        console.error(`Error: ${err.message}`);
      process.exit(1);
    }
}
module.exports = connectDB;
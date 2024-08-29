const mongoose = require("mongoose");
const CookSchema= mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true 
    },
    password: {
        type: String,
        required: true
    },
    
    role: {
        type:String, 
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Cook", CookSchema)
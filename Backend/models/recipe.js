const { timeStamp } = require("console")
const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    ingredients:{
        type: [String],
        required: true
    },
    instructions:{
        type: [String],
        required: true
    },
    time:{
        type: String,
        // required: true
    },
    reviews:{
        type:String,

    },
    recipeImg:{
        type: String,
        
    },
}, {timeStamp: true})

module.exports = mongoose.model("Recipe", recipeSchema)//pass table name and recipeSchema
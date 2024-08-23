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
    shortDescription:{
        type:[String],

    },
    noOfServings:{
        type:String,
    },
    
        recipeImg:
        {
            data: Buffer,
            contentType: String
        }
        
    ,
}, {timeStamp: true})

module.exports = mongoose.model("Recipe", recipeSchema)//pass table name and recipeSchema
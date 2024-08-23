const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }

},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
//exports the module
module.exports = mongoose.model('Category', categorySchema);
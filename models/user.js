const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
    },
}, {timestamps: true});

module.exports= mongoose.model('User',UserSchema);
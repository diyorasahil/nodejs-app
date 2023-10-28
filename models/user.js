const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
    },
    username:{
        type: String
    },
    phonenumber:{
        type: Number
    }
},{timeseries: true});

const user = mongoose.model('user', UserSchema);

module.exports = user;
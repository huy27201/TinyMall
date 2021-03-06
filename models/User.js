const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//
const UserSchema = new Schema({
    userName: String,
    password: String,
    name: String,
    address: [String],
    wallet: Number,
});

//"User" -> Collection name
const User = mongoose.model('User', UserSchema);
module.exports = User;
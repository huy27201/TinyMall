const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//
const BuyerSchema = new Schema({
    userName: String,
    password: String,
    name: String,
    address: [String],
    wallet: Number,
});

//"Item" = Collection name
const Buyer = mongoose.model('Buyer',BuyerSchema);
module.exports = Buyer;
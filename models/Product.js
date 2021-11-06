const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//
const ProductSchema = new Schema({
    productID: String,
    price: Number,
    tag: [String],
    describe: String,
    image: String,
    quantity: Number,
    //evaluate
});

const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;
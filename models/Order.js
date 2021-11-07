const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//
const OrderSchema = new Schema({
    orderID: String,
    buyerID: String,
    //products
    products: [{
        productID: String,
        quantity: Number,
    }],
    status: String,
    shippingAdress: String,
    date: Date,
});

const Order = mongoose.model('Order',OrderSchema);
module.exports = Order;
const express = require('express');
const router = express.Router();

const Order = require('../../models/Order')

router.get('/', (req, res)=>{
    Order.find()
    .then(orders => res.json(orders));
});

router.post('/', (req, res)=>{
    const newOrder = new Order({
        orderID: req.body.orderID,
        buyerID: req.body.buyerID,
        products: req.body.products,
        status: req.body.status,
        shippingAdress: req.body.shippingAdress,
        date: req.body.date,
    });

    newOrder.save().then(order => res.json(order));
});

router.delete('/:id',(req, res)=>{
    Order.findById(req.params.id)
        .then(order => other.remove().then(() => res.json({success : true})))

        .catch(err => res.status(404).json({success : false}));
});

module.exports = router;
const  express = require('express')
const multer = require('multer')

const db = require('../../config/keys').mongoURI;

const router = express.Router();

//Item Model
const Product = require('../../models/Product')



//@route GET api/products
//@desc Get All products
//@access Public
router.get('/',(req,res)=>{
    if (req.query.id) {
        Product.findById(req.query.id)
            .then(data => res.json(data));
    }
    else {
        Product.find()
        .then(products => res.json(products))
    }
});

//@route POST api/products
//@desc Create a POST
//@access Public
router.post('/',(req,res)=>{
    const newProduct = new Product({
        productID: req.body.productID,
    });
    newProduct.save().then(product => res.json(product))
});



//@route DELETE api/buyer/:id
//@desc Delete a buyer
//@access Public
router.delete('/:id',(req,res)=>{
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({success : true})))
        // if ID not found
        .catch(err => res.status(404).json({success : false}));
});


module.exports = router;    
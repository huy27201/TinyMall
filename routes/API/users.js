const  express = require('express')
const router = express.Router();

//Item Model
const Buyer = require('../../models/User')

//@route GET api/buyer
//@desc Get All buyer
//@access Public
router.get('/',(req,res,next)=>{
    Buyer.find()
    .then(buyers => res.json(buyers))
});

//@route POST api/buyer
//@desc Create a POST
//@access Public
router.post('/',(req,res,next)=>{
    const newBuyer = new Buyer({
        userName: req.body.userName,
    
    });
    newBuyer.save().then(buyer => res.json(buyer))
});

//@route DELETE api/buyer/:id
//@desc Delete a buyer
//@access Public
router.delete('/:id',(req,res)=>{
    Buyer.findById(req.params.id)
        .then(buyer => buyer.remove().then(() => res.json({success : true})))
        // if ID not found
        .catch(err => res.status(404).json({success : false}));
});


module.exports = router;    
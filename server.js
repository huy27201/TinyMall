const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


//routes
const orders = require('./routes/API/orders')
const users = require('./routes/API/users')
const products = require('./routes/API/products')
const attachment = require('./routes/API/attachment')


const app = express()



//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(()=> console.log('MongoDB connected...'))
    .catch(err=>console.log(err));

const cors = require("cors")

//bodyparser
app.use(bodyParser.json());
//use routes
//
app.use(cors())
app.use('/API/orders', orders);
app.use('/users', users);
app.use('/products', products);
app.use('/attachment',attachment);
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use('/login', (req, res) => {
    console.log(req.body)
    res.send({"text":'bau duoi'})
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
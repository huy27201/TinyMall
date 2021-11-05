const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//routes
const items = require('./routes/API/buyers')
const orders = require('./routes/API/orders')


const app = express()

//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(()=> console.log('MongoDB connected...'))
    .catch(err=>console.log(err));

app.use(bodyParser.json());
//use routes
app.use('/API/buyers', items);
app.use('/API/orders', orders);
//


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
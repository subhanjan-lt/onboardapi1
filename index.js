const express = require("express");
const mongoose = require("mongoose");
const app = express();

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/datamodel');
mongoose.Promise = global.Promise;

//serve static data
app.use(express.static('public'));

//express parser
app.use(express.json());

app.use('/api',require('./routes/api'));

//error-handling middleware function
app.use(function(err, req, res, next) {
    res.status(err).send({error: err.message});
});

app.listen(4000, function() {
    console.log("We are all ears!");
});
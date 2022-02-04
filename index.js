const express = require("express");
const mongoose = require("mongoose");
const { HeaderKeysHandler } = require("./header_keys/header_keys_handler.js");
const { UsersHandler } = require("./users/users_handler.js");
const router = express.Router();
const app = express();

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/datamodel');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());

//global error-handling middleware
app.use(function(err, req, res, next) {
    res.status(err).send({error: err.message});
});
//init modules
UsersHandler.init(router);
HeaderKeysHandler.init(router);

app.use('/api', router);
app.listen(4000, function() {
    console.log("We are all ears!");
});
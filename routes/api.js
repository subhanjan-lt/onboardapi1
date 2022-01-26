const express = require('express');
const { use } = require('express/lib/application');
const user = require('../models/users')
const router = express.Router();

router.get('/users',function(req, res, next){
    user.find({}).then(function(users) {
        res.send(users);
    }).catch(next);
});

router.post('/users', function(req, res, next){
    user.create(req.body).then(function(user) {
        res.send(user);
    }).catch(next);
});

router.put('/users/:id', function(req, res, next){
    user.findOneAndUpdate({_id: req.params.id}, req.body).then(function(oldUser) {
        user.findOne({_id: req.params.id}).then(function(user) {
            res.send(user);
        }).catch(next);
    }).catch(next);
});
router.delete('/users/:id', function(req, res, next){
    user.findOneAndDelete({_id: req.params.id}).then(function(user) {
        res.send(user);
    }).catch(next);
});


module.exports = router;
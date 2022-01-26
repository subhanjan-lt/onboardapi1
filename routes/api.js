const express = require('express');
const user = require('../models/users');
const headerkeys = require('../models/header_key_master');
const router = express.Router();

/*============== Added header key auth middleware function ==============*/

router.use(function(req, res, next){
    if (req.get('auth_key') === undefined) res.status(401).send('You are not authorized to request this data.');
    else {
        headerkeys.findOne({valid_key: req.get('auth_key')}).then(function(headerkey) {
            if (headerkey === null) res.status(401).send('You are not authorized to request this data.');
            else next();
        })
    }
})

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

/*============== Adding endpoints for Header Key Master ==============*/

router.get('/headerkeys', function(req, res, next){
    headerkeys.find({}).then(function(headerkey) {
        res.send(headerkey);
    }).catch(next);
})

router.post('/headerkeys', function(req, res, next){
    headerkeys.create(req.body).then(function(headerkey){
        res.send(headerkey);
    }).catch(next);
})

router.delete('/headerkeys/:key', function(req, res, next){
    headerkeys.findOneAndDelete({valid_key: req.params.key}).then(function(headerkey) {
        res.send(headerkey);
    }).catch(next);
});
module.exports = router;
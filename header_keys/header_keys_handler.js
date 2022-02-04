const headerkeys = require('./models/header_key_master');

class HeaderKeysHandler {
    static init = function (router) {
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
    }
}

module.exports = {
    HeaderKeysHandler: HeaderKeysHandler
};
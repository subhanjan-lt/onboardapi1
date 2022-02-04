const headerkeys = require('../header_keys/models/header_key_master');

class UsersMiddleware {
    static use = async function(router) {
        router.use('/users', function(req, res, next){
            if (req.get('auth_key') === undefined) {
                console.log('this is where the issue is', req.body);
                res.status(401).send('You are not authorized to request this data.');
            }
            else {
                headerkeys.findOne({valid_key: req.get('auth_key')}).then(function(headerkey) {
                    if (headerkey === null) res.status(401).send('You are not authorized to request this data.');
                    else next();
                })
            }
        })
    }
}

module.exports = {
    UsersMiddleware: UsersMiddleware
};
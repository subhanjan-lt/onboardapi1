const { UsersMiddleware } = require('./users_middleware');
const { UsersService } = require('./users_service');

class UsersHandler{
    static init = function (router) {
        UsersMiddleware.use(router);
        
        router.route('/users').get(function(req, res, next){
            UsersService.findAll(req, res, next);
        });

        router.route('/users/:name').get(function (req, res, next) {
            UsersService.findOne(req, res, next);
        });
        
        router.route('/users').put(function(req, res, next){
            UsersService.create(req, res, next);
        });
        
        router.route('/users/:id').post(function(req, res, next){
            UsersService.update(req, res, next);
        });
        router.route('/users/:id').delete(function(req, res, next){
            UsersService.delete(req, res, next);
        });
    }
}

module.exports = {
    UsersHandler: UsersHandler
};
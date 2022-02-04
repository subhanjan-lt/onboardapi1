const { UsersMiddleware } = require('./users_middleware');
const { UsersService } = require('./users_service');

class UsersHandler{
    static init = function (router) {
        UsersMiddleware.use(router);
        
        router.get('/users', async function(req, res, next){
            await UsersService.findAll(req, res, next);
        });

        router.get('/users/:name', async function (req, res, next) {
            await UsersService.findOne(req, res, next);
        });
        
        router.put('/users', async function(req, res, next){
            await UsersService.create(req, res, next);
        });
        
        router.post('/users/:id', async function(req, res, next){
            await UsersService.update(req, res, next);
        });
        router.delete('/users/:id', async function(req, res, next){
            await UsersService.delete(req, res, next);
        });
    }
}

module.exports = {
    UsersHandler: UsersHandler
};
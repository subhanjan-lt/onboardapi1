const user = require('./models/users');

class UsersService {
    static findAll = async function (req, res, next) {
        await user.find({}).then(function(users) {
            res.send(users);
        }).catch(next);
    }

    static findOne = async function (req, res, next) {
        await user.findOne({name: req.params.name}).then(function (user) {
            res.send(user);
        }).catch(next);
    }

    static create = async function (req, res, next) {
        await user.create(req.body).then(function(user) {
            res.send(user);
        }).catch(next);
    }

    static update = async function (req, res, next) {
        await user.findOneAndUpdate({_id: req.params.id}, req.body).then(function(oldUser) {
            user.findOne({_id: req.params.id}).then(function(user) {
                res.send(user);
            }).catch(next);
        }).catch(next);
    }

    static delete = async function (req, res, next) {
        await user.findOneAndDelete({_id: req.params.id}).then(function(user) {
            res.send(user);
        }).catch(next);
    }
}

module.exports = {
    UsersService: UsersService
};
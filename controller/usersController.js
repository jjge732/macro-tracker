const db = require('../models');

module.exports = {
    getUser: (req, res) => {
        db.User
            .find({user: req.params.user})
            .then(dbUser => {res.json(dbUser)})
            .catch(err => {res.status(422).json(err)});
    },
    getAllUsers: (req, res) => {
        db.User
            .find({})
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.status(422).json(err)
            });
    },
    postUser: (req, res) => {
        db.User
            .create({
                user: req.body.user
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    deleteUser: (req, res) => {
        db.User
            .findOneAndDelete({user: req.body.user})
            .then(deletedUser => res.json(deletedUser))
            .catch(err => res.status(422).res.json(err));
    }
}
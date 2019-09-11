const db = require('../models');

module.exports = {
    getUserWithFoods: (req, res) => {
        db.User
            .find({user: req.params.user})
            .populate({path: "foods"})
            .then(dbUser => {res.json(dbUser)})
            .catch(err => {res.status(422).json(err)});
    },
    postFood: (req, res) => {
        db.Food
            .create({
                foodName: req.body.foodName,
                gramsCarbs: req.body.gramsCarbs,
                gramsFat: req.body.gramsFat,
                gramsProtein: req.body.gramsProtein
            })
            .then(async dbFood => {
                await db.User.updateOne({
                    user: req.body.user
                }, {
                    $push: {
                        foods: dbFood._id
                    }
                });
                res.json(dbFood);
            })
            .catch(err => res.status(422).send(err));
    },
    getAllFoods: (req, res) => {
        db.Food.find({})
        .then(dbFoods => {
            res.json(dbFoods);
        })
        .catch(err => {
            res.status(422).json(err)
        });
    }
}
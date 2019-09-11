const db = require('../models');

module.exports = {
    postFood: (req, res) => {
        db.Food
            .create({
                foodName: req.body.foodName,
                gramsCarbs: req.body.gramsCarbs,
                gramsFat: req.body.gramsFat,
                gramsProtein: req.body.gramsProtein
            })
            .then(dbFood => {
                db.User.updateOne({
                    user: req.body.user
                }, {
                    $push: {
                        foods: dbFood._id
                    }
                })
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
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
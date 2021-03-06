const db = require('../models');

module.exports = {
    getUserWithMeals: (req, res) => {
        db.User
            .find({user: req.params.user})
            .populate({path: "meals"})
            .then(dbUser => {res.json(dbUser)})
            .catch(err => {res.status(422).json(err)});
    },
    getFoodsInMeal: (req, res) => {
        db.Meal
            .find({_id: req.params.mealId})
            .populate({path: "foods"})
            .then(dbMeal => {res.json(dbMeal)})
            .catch(err => {res.status(422).json(err)});
    },
    addFoodToMeal: (req, res) => {
        db.Meal
            .findOneAndUpdate({_id: req.body.mealId},
                {
                   $push: {
                       foods: req.body.foodId
                   }
                })
            .then(dbFood => {res.json(dbFood)})
            .catch(err => {res.status(422).json(err)});
    },
    postMeal: (req, res) => {
        db.Meal
            .create({
                mealName: req.body.mealName,
                foods: req.body.foodId
            })
            .then(async dbMeal => {
                await db.User.updateOne({
                    user: req.body.user
                }, {
                    $push: {
                        meals: dbMeal._id
                    }
                });
                res.json(dbMeal);
            })
            .catch(err => res.status(422).json(err));
    },
    getAllMeals: (req, res) => {
        db.Meal
            .find({})
            .then(dbMeal => res.json(dbMeal))
            .catch(err => res.status(422).json(err));
    }
}
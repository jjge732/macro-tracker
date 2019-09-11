const db = require('../models');

module.exports = {
    postMeal: (req, res) => {
        db.Meal
            .create({
                mealName: req.body.mealName,
                
            })
            .then(dbFood => res.json(dbFood))
            .catch(err => res.status(422).json(err));
    }
}
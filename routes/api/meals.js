const router = require('express').Router();
const mealsController = require('../../controller/mealsController');

router.route('/')
    .post(mealsController.postMeal);

router.route("/:mealId")
    .get(mealsController.getFoodsInMeal);

router.route("/user/:user")
    .get(mealsController.getUserWithMeals);

router.route('/all')
    .get(mealsController.getAllMeals);

module.exports = router;
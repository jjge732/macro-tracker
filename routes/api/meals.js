const router = require('express').Router();
const mealsController = require('../../controller/mealsController');

router.route('/')
    .post(mealsController.postMeal)
    .patch(mealsController.addFoodToMeal);

router.route('/all')
    .get(mealsController.getAllMeals);

router.route("/:mealId")
    .get(mealsController.getFoodsInMeal);

router.route("/user/:user")
    .get(mealsController.getUserWithMeals);


module.exports = router;
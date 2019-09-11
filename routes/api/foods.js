const router = require('express').Router();
const foodsController = require('../../controller/foodsController');

router.route("/")
    .post(foodsController.postFood)
    .patch(foodsController.updateFood);

router.route("/all")
    .get(foodsController.getAllFoods);

router.route("/user/:user")
    .get(foodsController.getUserWithFoods);

router.route("/:foodId")
    .get(foodsController.getFoodById)

module.exports = router;
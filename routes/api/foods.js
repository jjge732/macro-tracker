const router = require('express').Router();
const foodsController = require('../../controller/foodsController');

router.route("/")
    .post(foodsController.postFood);

router.route("/user/:user")
    .get(foodsController.getUserWithFoods);

router.route("/:foodId")
    .get(foodsController.getFoodById)
    .patch(foodsController.updateFood);

router.route("/all")
    .get(foodsController.getAllFoods);


module.exports = router;
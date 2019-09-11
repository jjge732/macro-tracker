const router = require('express').Router();
const foodsController = require('../../controller/foodsController');

router.route("/")
    .post(foodsController.postFood);

router.route("/:user")
    .get(foodsController.getUserWithFoods);

router.route("/all")
    .get(foodsController.getAllFoods);


module.exports = router;
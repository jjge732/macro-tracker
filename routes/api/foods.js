const router = require('express').Router();
const foodsController = require('../../controller/foodsController');

router.route('/')
    .post(foodsController.postFood);

router.route('/all')
    .get(foodsController.getAllFoods);


module.exports = router;
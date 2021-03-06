const router = require('express').Router();

const userRoutes = require('./users');
const foodRoutes = require('./foods');
const mealRoutes = require('./meals');

router.use('/users', userRoutes);
router.use('/foods', foodRoutes);
router.use('/meals', mealRoutes);

module.exports = router;

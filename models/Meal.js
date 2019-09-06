const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    meal: {
        type: String,
        required: true
    }
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
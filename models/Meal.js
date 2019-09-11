const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    mealName: {
        type: String,
        required: true
    },
    foods : [{
        type: Schema.Types.ObjectId,
        ref: 'Food'
    }]
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    foodName: {
        type: String,
        required: true
    },
    gramsCarbs: {
        type: Number,
        required: true
    },
    gramsFat: {
        type: Number,
        required: true
    },
    gramsProtein: {
        type: Number,
        required: true
    }
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
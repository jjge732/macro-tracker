const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    foods : [{
        type: Schema.Types.ObjectId,
        ref: 'Food'
    }],
    meals : [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
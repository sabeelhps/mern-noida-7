const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    imageUrl: String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;

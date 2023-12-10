const mongoose = require('mongoose');
const schema = require('./restaurant-schema');

const model = mongoose.model("RestaurantModel", schema);

module.exports = model;

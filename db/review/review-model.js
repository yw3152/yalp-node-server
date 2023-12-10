const mongoose = require('mongoose');
const schema = require('./review-schema');

const model = mongoose.model("ReviewModel", schema);

module.exports = model;

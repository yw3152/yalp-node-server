const mongoose = require('mongoose');
const schema = require('./user-schema');
const model = mongoose.model('Users', schema);
module.exports = model;
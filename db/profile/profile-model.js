const mongoose = require('mongoose');
const schema = require('./profile-schema');
const model = mongoose.model('ProfileModel', schema);
module.exports = model;


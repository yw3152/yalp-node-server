const mongoose = require('mongoose');

const schema = mongoose.Schema({
    location_id: String,
    name: String,
    description: String,
    address: String,
    phone: String,
    website: String,
    photo:{images:{large:{url: String}}},
    author: String,
}, {collection: 'restaurants'});

module.exports = schema;

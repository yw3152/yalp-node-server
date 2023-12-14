const mongoose = require('mongoose');

const schema = mongoose.Schema({
    user: {
        _id: String,
        username: String,
        email: String,
        avatarIcon: String
    },
    restaurant: {
        location_id: String,
        _id: String,
        name: String,
    },
    content: String,
    rating: Number,
    date: String
}, {collection: 'reviews'});

module.exports = schema;

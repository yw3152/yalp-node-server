const mongoose = require('mongoose');
const schema = mongoose.Schema({

    name:String,
    email: String,
    address: String,
    type: String,

    //only for restaurant
    title: String,
    details: String,
    cuisine: String,
    photo: {
        image: String
    }

}, {collection: "profiles"});
module.exports = schema;

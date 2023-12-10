const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const schema = mongoose.Schema({
  email: {
    type:String,
    required: true,
    unique: true
  },
  avatarIcon: String,
  role:{
    type:String,
    default: "USER",
    enum: ["USER", "HOST", "ADMIN"]
  }
}, {collections: "users"});
schema.plugin(passportLocalMongoose);
module.exports = schema;
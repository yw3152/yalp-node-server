const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./db/user/user-model');
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs");

const MONGODB_URI = 'mongodb+srv://rf-admin:cs5610@restaurant-finder.ivbrl.mongodb.net/restaurant-finder?retryWrites=true&w=majority';
mongoose.connect("mongodb://127.0.0.1:27017/yalp");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sessionConfig = {
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(session(sessionConfig));
app.use(cookieParser("sercetcode"))
app.use(passport.initialize());
app.use(passport.session());

const authenticateFunction =
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
})
passport.use(new LocalStrategy(User.authenticate()));
// passport.use(authenticateFunction)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// app.get('/fakeuser', (req, res) => {
//   const user = new User({email: 'fakeUser@gmail.com', username: 'fakeUser'});
//   const newUser = User.register(user, 'ffaakkee');
//   res.send(newUser)
// })


require('./services/user-service')(app);

// services
require('./services/review-service')(app);
require('./services/restaurant-service')(app);

app.listen(process.env.PORT || 4000);
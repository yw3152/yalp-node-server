const dao = require('../db/user/user-dao')
const User = require('../db/user/user-model')
let loggedInUserId = null;


module.exports = (app) => {
  const findUsers = (req, res) => {
    dao.findUsers()
        .then(user => res.json(user))
  }
  const userRegister = (req, res) => {
    console.log(req.body);
    const {email, username, password, role} = req.body;
    const newUser = new User({email, username, password, role});


    User.register(newUser, password)
    .then(status => {console.log("status", status); res.send(status)})
        .catch(e=>{console.log("error", e); res.sendStatus(403)})
  }

  const userLogin = (req, res) => {
    console.log("in user Login", req.user)
    loggedInUserId = req.user._id;
    res.json(req.user)
  }

  const getCurrentUser = (req, res) => {
    console.log("get current user server", loggedInUserId)
    dao.findUserById(loggedInUserId)
    .then(user => {console.log("get current", user);res.json(user)})
        .catch(e=>{console.log(e); res.sendStatus(403)})
  }

  const getUserById = (req, res) => {
    const id = req.params.uid;
    console.log("get current user by id server", id)
    dao.findUserById(id)
    .then(user => {console.log("get userby id", user);res.json(user)})
        .catch(e=>{console.log(e); res.sendStatus(403)})
  }

  const userLogout = (req, res) => {
    console.log("user logout")
    loggedInUserId = null;
    res.send("logged out on server side")
  }

  const updateUserProfile = (req, res) => {
    console.log("update profile in server", req.body)
    dao.updateUserProfile(loggedInUserId, req.body)
        .then(status => {console.log("after update user", status); res.json(status)})
        .catch(e=>{console.log(e)})
  }

  app.get('/users', findUsers)
  app.get('/user', getCurrentUser)
  app.get('/user/:uid', getUserById)
  app.get('/register', (req,res) => res.render('users/register'))
  app.get('/login', (req, res)=>res.render('users/login'))
  app.post('/register', userRegister)
  app.get('/logout', userLogout)
  app.put('/user', updateUserProfile)
}

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()){
    console.log("is not logged in")
    res.status(401).json({msg: "not autorized"})
  }
  next()
}
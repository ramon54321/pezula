var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy

var database = require("./database.js")

module.exports = function (app) {
  // Passport
  app.use(passport.initialize())
  app.use(passport.session())

  app.post('/api/login', passport.authenticate("local"), function (req, res) {
  	res.send("logged in - Session: \n" + JSON.stringify(req.session))
  })

  passport.use(new LocalStrategy(function (username, password, done) {
  	console.log("Sigining in " + username + " with password " + password);
  	return done(null, { name: username, age: 27 })
  }))

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
}

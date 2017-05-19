var session = require("express-session")
var bodyParser = require("body-parser")
var database = require("./database.js")

module.exports = function (app) {
  // Api
  app.get('/api/user', function (req, res) {
  	database.UserModel.find().exec(function (err, data) {
  		if(err) {
  			console.log("Error in data retrieval.");
  			res.send(err)
  		} else {
  			res.send(data)
  		}
  	})
  })

  app.post('/api/user', function (req, res) {
    new database.UserModel({
  		username: req.body.username,
  		password: req.body.password,
      type: req.body.type
  	}).save()
  	res.send("Data added " + req.body.username + " " + req.body.password)
  })
}

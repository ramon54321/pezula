var session = require("express-session")
var bodyParser = require("body-parser")
var database = require("./database.js")

module.exports = function (app) {
  // Api
  app.get('/api/person/findall', function (req, res) {
  	database.PersonModel.find().exec(function (err, data) {
  		if(err) {
  			console.log("Error in data retrieval.");
  			res.send(err)
  		} else {
  			res.send(data)
  		}
  	})
  })

  app.post('/api/person/add', function (req, res) {

    /*new database.PersonModel({
  		name: "James",
  		age: 27
  	}).save()
    */
  	res.send("Data added " + req.body.username + " " + req.body.password)
  })
}

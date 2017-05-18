var express = require("express")
var app = express()
var session = require("express-session")
var bodyParser = require("body-parser")

// Initailization
app.use(express.static(__dirname + "/../client/bin/static"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({secret: 'whale'}))

var database = require("./database.js")

require("./routes.js")(app)
require("./passport.js")(app)
require("./api.js")(app)


console.log("Before listen");

app.listen(80, function () {
	console.log("Server listening on port 80.");
})

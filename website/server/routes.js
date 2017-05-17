var database = require("./database.js")

module.exports = function (app) {
  // Routes
  app.get('/', function (req, res) {
  	res.sendFile("./client/bin/index.html", { root: __dirname + "/../" })
  })

  app.get('/session', function (req, res) {
  	res.send(JSON.stringify(req.session))
  })

  app.get('/user', function (req, res) {
  	res.send(JSON.stringify(req.user))
  })
}

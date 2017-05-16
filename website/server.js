
var express = require("express")
var app = express()
var mongoose = require("mongoose")
var Schema = mongoose.Schema

app.use(express.static("bin/static"))

app.get('/', function (req, res) {
	res.sendFile("./bin/index.html", { root: __dirname })
})

// Mongoose
mongoose.connect("database-service:27017/devtest")
var personSchema = new Schema({
	name: String,
	age: Number
})
var PersonModel = mongoose.model("Person", personSchema)

// Api
app.get('/api/person/findall', function (req, res) {
	PersonModel.find().exec(function (err, data) {
		if(err) {
			console.log("Error in data retrieval.");
			res.send(err)
		} else {
			res.send(data)
		}
	})
})

app.get('/api/person/add', function (req, res) {
	new PersonModel({
		name: "James",
		age: 27
	}).save()
})

app.listen(80, function () {
	console.log("Server listening on port 80.");
})

/*

var MongoClient = require("mongodb").MongoClient;
var format = require("util").format;

console.log("Connecting to mongo");

MongoClient.connect("mongodb://database-service:27017", function(err, db) {
	if(err) {
		throw err;
	} else {
		console.log("Connected.");
	}

	db.close();
});

var port = 80;

var http = require("http");
var path = require("path");
var fs = require("fs");
var checkMimeType = true;

console.log("Starting web server on port:" + port);
console.log(__dirname);

http.createServer( function(req, res) {

	var now = new Date();

	var filename;
  console.log("URL: " + req.url);
  if(req.url === "/") {
      console.log("No url");
      filename = req.url + "bin/index.html";
  } else {
      console.log("Url: " + req.url);
      filename = "/bin" + req.url;
  }
  console.log("Filename: " + filename);
	var ext = path.extname(filename);
	var localPath = __dirname;
	var validExtensions = {
		".html" : "text/html",
		".js": "application/javascript",
		".css": "text/css",
		".txt": "text/plain",
		".jpg": "image/jpeg",
		".gif": "image/gif",
		".png": "image/png",
		".woff": "application/font-woff",
		".woff2": "application/font-woff2"
	};

	var validMimeType = true;
	var mimeType = validExtensions[ext];
	if (checkMimeType) {
		validMimeType = validExtensions[ext] != undefined;
	}

	if (validMimeType) {
		localPath += filename;
		fs.exists(localPath, function(exists) {
			if(exists) {
				console.log("Serving file: " + localPath);
				getFile(localPath, res, mimeType);
			} else {
				console.log("File not found: " + localPath);
				res.writeHead(404);
				res.end();
			}
		});

	} else {
		console.log("Invalid file extension detected: " + ext + " (" + filename + ")")
	}

}).listen(port);

function getFile(localPath, res, mimeType) {
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			if (mimeType != undefined) {
				res.setHeader("Content-Type", mimeType);
			}
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}

*/

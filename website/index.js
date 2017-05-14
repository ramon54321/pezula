var http = require('http');
var fs = require('fs');

console.log("Running node app.");

http.createServer(function(req, res){
  fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
  });
}).listen(80);

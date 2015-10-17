//inc http
var http = require('http');

//create Webserver
http.createServer(function(req, res) {

  //respond to inc http request
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HelloLloyd\n');

}).listen(1337, '127.0.0.1');

//log
console.log('Server running at 127.0.0.1:1337');

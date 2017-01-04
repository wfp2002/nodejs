'use strict';
var http = require('http');

var port = (process.env.PORT || 5000);

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.write(JSON.stringify({name: 'node prinmeiro programa'}));
	response.end();
}).listen(port);
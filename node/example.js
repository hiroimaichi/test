var http = require('http');
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var ev = new EventEmitter();
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res){
  	setTimeout(function () {
		res.writeHead(200, {'Content-Type': 'text/plain'});
	    res.end('Hello Japan\n');
			console.log('hogehoge');
	 }, 2000);
});

server.listen(8000);

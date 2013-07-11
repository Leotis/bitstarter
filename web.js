var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var d = ""; 
app.get('/', function(request, response) {

    fs.readFileSync('index.html', function (data) {
	var buf = new Buffer(data.length);
	response.send(buf.toString('utf8'));
    });

    

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

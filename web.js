var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(256);
  var fs = require('fs');
  buf=fs.readFileSync('index.html');
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

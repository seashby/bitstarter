var express = require('express');
var fs = require('fs');
var blurb = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var newblurb = fs.readFileSync(blurb).toString(); 
    response.send(newblurb);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

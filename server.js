var express = require('express');// importing software packages or libraries. express library is used to create web servers
var morgan = require('morgan'); // morgan is used for the output logs of the server
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) { //handling specific url. get request is coming to / the below function will get executed
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) { // if this particular url is rquested this one the below function will executed as a response.
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});


// server.js is the source code for the server file.it is actually executed.

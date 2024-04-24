var https = require('https');
var fs = require('fs');

const hostname = process.env.HOST || 'localhost';
const token = process.env.TOKEN || 'none'; // Default token if TOKEN is not set


var options = {
  'method': 'POST',
  'hostname': hostname,
  'path': '/',
  'headers': {
    'Authorization': 'Bearer '+token
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error.message);
  });
});

req.end();
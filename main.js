/* Hello, World! program in node.js */
var http = require("http");
http.createServer(function (request, response) {
  // Send the HTTP header
  // HTTP Status: 200: OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // send the response body
response.end('Hello World!\n');
}).listen(8081);

// Console will print message
console.log('Server running at http://127.0.0.1:8081/');

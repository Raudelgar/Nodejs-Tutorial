//http is a core module that doesn't need to be install, just called.
const http = require("http");
//To load a file, you can use fs module (file system). Other build-in module in node.js
const fs = require("fs");

//127.0.0.1 is a default ip address
const hostname = "127.0.0.1";
const port = 3000;

/**
 * Anonymous Function
 * function(arg1, arg2){}
 * is the same as
 * (arg1, arg2) => {}
 * 
 * http.createServer() method turns your computer into an HTTP server, creates an HTTP server object.
 * The HTTP server object can listen to ports on your computer and execute a function, a requestListene, 
 * each time a request is made. Syntax => http.createServer(requestListener);
 * res => response from HTTP 
 * req => request from the client, as an object
 * Add an HTTP Header: If the response from the HTTP server is supposed to be displayed as HTML, you should
 * include an HTTP Header with the right content type => res.writeHeader() method has two arguments, Status 
 * Code and an Object containing the response headers. 
 * The Status Code 200 saids that everything is OK.
 * Also you can defined in other way:
 * const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.write("Testing w3school example");
      res.setHeader("Content-type","text/html");
      res.end("Hello World!");
      res.end();
  });
 * The function runServer(), I created to keep the server configuration an apart.
 */

function runServer(html) {
  const server = http.createServer((req, res) => {
    res.writeHeader(200, {"Content-type":"text/html"});
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, ()=>{
    console.log("Server started on port "+port);
  });
}
  
  
fs.readFile("index.html",(err,html)=>{
  if(err) {
    throw err;
  }
  runServer(html);
});

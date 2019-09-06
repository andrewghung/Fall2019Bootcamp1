var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format as a response if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: Explore the request object and its properties  https://www.tutorialspoint.com/nodejs/nodejs_request_object.htm
    HINT: Explore the response object and its properties https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
    
    HINT: Explore how callback's work 
    http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4
    
    HINT: Explore the list of MIME Types
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
   */
  if (request.method == 'GET' && parsedUrl.pathname == '/listings') {
    //send listingData in JSON format
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write(JSON.stringify(listingData));
      response.end();
  }
  else {
      //send 404 error 
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('Bad gateway error');
      response.end();
      //response.sendStatus(404);
      }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    HINT: Read up on JSON parsing Node.js
   */

    //Check for errors
  

   //Save the sate in the listingData variable already defined
  listingData = JSON.parse(data)

  //Creates the server
  server = http.createServer(requestHandler);
  //Start the server
  server.listen(port, function() {
     console.log('Server listening on: http://127.0.0.1:' + port);
  });

console.log('Is the server started?');

});

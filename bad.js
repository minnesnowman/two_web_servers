var http = require("http");

const PORT = 7500;

function handleRequest(request, response) {
    var url = request.url;
    response.end("Pound sand, dweeb!")
}

var server  = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("The server is running on port " + PORT);
    
})
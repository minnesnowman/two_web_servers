var http = require("http");

const PORT = 7000;

function handleRequest(request, response) {
    var url = request.url;
    response.end("Wow, you're so capable and cool!")
}

var server  = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("The server is running on port " + PORT);
    
})

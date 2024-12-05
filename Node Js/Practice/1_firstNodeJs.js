/*
My First Node.js Server - Hello World Example

To Create a Node.js Server, We Need:

1) **'http' Module**:
   - The `http` module is required to create a server.
   - Example: `var http = require('http');`

2) **'createServer' Method**:
   - This method creates the server.
   - It takes a callback function with two parameters:
     - `req`: Represents the request object (incoming data from the client).
     - `res`: Represents the response object (used to send data back to the client).
   - To send a response, use: `res.end("content");`

3) **'listen' Method**:
   - This method specifies the port on which the server will listen.
   - Example: `server.listen(5050);` (5050 is the port number).

4) **Run the Server**:
   - To execute the server, use the command: `node fileName.js` in the project folder.
*/

// Step 1: Import the 'http' module
var http = require('http');

// Step 2: Create the server using 'createServer' method
var server = http.createServer(function (req, res) {
    // Step 3: Set response headers (optional but recommended for content type)
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Step 4: Send the response using 'res.end'
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello World from Node.js!</h1>
            <p>This is my first Node.js server response.</p>
        </body>
        </html>
    `);
});

// Step 5: Listen on port 5050
server.listen(5050, () => {
    console.log('Server started and running on http://localhost:5050');
});

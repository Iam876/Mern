/*
Understanding How the Request-Response Model Works:

The Request-Response Model in Node.js is a basic concept for handling communication between the client (browser) and server.

RESPONSE:
1) **Status Code**:
   - Indicates the status of the response.
   - Common examples:
     - 200: Success
     - 404: Page Not Found
     - 500: Internal Server Error

2) **Data**:
   - **Headers**: Metadata about the response (e.g., Content-Type, Status, etc.).
   - **Body**: The actual content sent to the client (e.g., HTML, JSON, etc.).

*/

// Step 1: Import the 'http' module
var http = require('http');

// Step 2: Create the server using 'createServer' method
var server = http.createServer((req, res) => {
    // Step 3: Define routes and their responses
    if (req.url == '/') {
        // Home Page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is the Home Page</h1>');
        res.end();
    } else if (req.url == '/blog') {
        // Blog Page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is the Blog Page</h1>');
        res.end();
    } else if (req.url == '/about') {
        // About Us Page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is the About Us Page</h1>');
        res.end();
    } else if (req.url == '/contact') {
        // Contact Us Page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is the Contact Us Page</h1>');
        res.end();
    } else {
        // Handle Undefined Routes with a 404 Error
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 - Page Not Found</h1>');
        res.end();
    }
});

// Step 4: Start the server and listen on port 5050
server.listen(5050, () => {
    console.log('Request-Response Model Server Started on Port 5050...');
});

/*
The `url` module in Node.js provides utilities for URL resolution, parsing, and formatting.
This module is particularly useful when working with URLs, whether we need to extract query parameters, 
manipulate paths, or construct URLs programmatically.

## Importing the URL Module
To use the `url` module, we need to require it:
    `const url = require('url');`

## Key Features of the URL Module
1. Parsing a URL: Break down a URL into its components.
2. Formatting a URL: Build a URL from its components.
3. Resolving URLs: Combine a base URL with a relative path.
4. Working with Query Strings: Access and manipulate query parameters.

*/

/////////////////////////////
// Example 01: Functional Approaches
/////////////////////////////

const http = require('http');
const URL = require('url');

const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = URL.parse('https://translate.google.com/?sl=es&tl=en&op=translate', true);
    
    // Create a new URL object
    const newUrlObj = {
        protocol: parsedUrl.protocol,
        host: parsedUrl.host,
        path: parsedUrl.pathname
    };

    // Format the new URL
    const formatted_url = URL.format(newUrlObj);

    // Send the response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(formatted_url);
    res.end();
});

server.listen(5050, () => {
    console.log('Server is started on port 5050...');
});

/////////////////////////////
// Example 02: OOP Approach with `URL` Module
/////////////////////////////

const httpOOP = require('http');
const { URL } = require('url');

const serverOOP = httpOOP.createServer(() => {
    // Create a URL object
    const myURL = new URL('https://example.com/path/page?name=John&age=30');

    console.log(myURL.protocol);   // 'https:'
    console.log(myURL.host);       // 'example.com'
    console.log(myURL.pathname);   // '/path/page'
    console.log(myURL.searchParams.get('name')); // 'John'
});

serverOOP.listen(5051, () => {
    console.log('Server (OOP) is started on port 5051...');
});

/////////////////////////////
// Example 03: OOP Approach with `URLSearchParams` Module
/////////////////////////////

const httpSearchParams = require('http');
const { URLSearchParams } = require('url');

const serverSearchParams = httpSearchParams.createServer(() => {
    // Work with URLSearchParams
    const params = new URLSearchParams('name=John&age=30');

    // Add and modify parameters
    params.append('country', 'BD');
    params.set('age', 25);

    // Convert to string
    console.log(params.toString()); // 'name=John&age=25&country=BD'
});

serverSearchParams.listen(5052, () => {
    console.log('Server (URLSearchParams) is started on port 5052...');
});

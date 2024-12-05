
# Node.js Documentation

## Table of Contents
1. [Introduction to Node.js](#introduction-to-nodejs)
2. [Modules in Node.js](#modules-in-nodejs)
    - [Commonly Used Modules](#commonly-used-modules)
    - [Rarely Used Modules](#rarely-used-modules)
3. [First Node.js Server](#first-nodejs-server)
4. [Request-Response Model in Node.js](#request-response-model-in-nodejs)
5. [HTTP Client](#http-client)

---

## Introduction to Node.js

### Dec 1995 - 2009 April
- JavaScript was created as a **CLIENT-SIDE LANGUAGE** / **FRONTEND LANGUAGE**.
  - Could only handle frontend tasks, with no capability to communicate with the server.

#### JavaScript Can Do:
- Interact with temporary storage
- Make interactive web pages
- Interact with local storage
- Send requests for data to the server
- Send requests to the server
- Work as an interface between server and user

#### JavaScript Cannot Do:
- Querying the database
- Operations over databases
- Access/write a file on the server
- Server-side request/response handling
- Software backend operations

---

### From May 2009
- Ryan Dahl created an awesome platform called **Node.js**.

#### Using Node.js, JavaScript Can Do:
- Querying the database
- Operations over databases
- Access/write a file on the server
- Server-side request/response handling
- Software backend operations

Node.js created a separate library, enabling other libraries to merge with it. To manage these third-party libraries, **NPM (Node Package Manager)** was introduced.

---

### FAQs
**Is Node.js a Programming Language?**  
No, Node.js is a platform to run JavaScript code for server-side interactions using Node.js libraries.

**What Previous Knowledge is Required for Node.js?**  
Only programming and OOP concepts are required.

**What Environment is Needed for Node.js?**  
- Download Node.js  
- Code Editor  

---

## Modules in Node.js

### What is a Module in Node.js?
A module is a reusable block of code that organizes functionality into small, manageable parts. Modules make your code easier to use and maintain.

### Types of Modules in Node.js:
1. **Core Modules**: Built-in modules provided by Node.js.  
   See [Commonly Used Modules](#commonly-used-modules) and [Rarely Used Modules](#rarely-used-modules).

2. **Local Modules**: Custom modules created by developers for organizing application code.  
   Example: `math.js` containing math functions.

3. **Third-Party Modules**: Modules created by others, available through **npm**.  
   Examples: `express`, `lodash`.

---

### Commonly Used Modules
1. **`http`**: Enables the creation of HTTP servers and clients.  
2. **`fs`**: Provides file system operations.  
3. **`path`**: Handles file and directory paths.  
4. **`url`**: Utilities for URL parsing and formatting.  
5. **`crypto`**: Cryptographic functionality like hashing and encryption.  
6. **`os`**: Provides OS-level information.  
7. **`events`**: Implements event-driven programming.  
8. **`stream`**: Handles streaming data.  
9. **`util`**: Utility functions for debugging and formatting.  
10. **`zlib`**: Compresses and decompresses files.

---

### Rarely Used Modules
1. **`assert`**: Provides assertion functions for testing.  
2. **`buffer`**: Handles raw binary data.  
3. **`child_process`**: Runs other programs or commands.  
4. **`cluster`**: Utilizes multi-core systems.  
5. **`dgram`**: Supports UDP datagram sockets.  
6. **`http2`**: Implements HTTP/2 protocol.  
7. **`net`**: Creates low-level networking servers.  
8. **`perf_hooks`**: Measures application performance.  
9. **`timers`**: Functions to execute code after delays.  
10. **`worker_threads`**: Enables multi-threading in Node.js.  
11. **`v8`**: Accesses V8 engine-specific features.  
12. **`tls`**: Implements TLS/SSL for secure communication.  
13. **`vm`**: Runs JavaScript in a virtual environment.  
14. **`readline`**: Reads lines from a stream.  
15. **`tty`**: Utilities for terminal devices.  
16. **`trace_events`**: Diagnostic event tracing.  
17. **`repl`**: Provides a REPL environment.  
18. **`inspector`**: Debugging and profiling features.  
19. **`async_hooks`**: Tracks asynchronous resource lifecycle.  
20. **`punycode`** *(Deprecated)*: Handles Punycode strings.  
21. **`querystring`** *(Deprecated)*: Parses query strings.

---

## First Node.js Server

### Steps to Create a Server:
1. Import the `http` module.  
   ```javascript
   var http = require('http');
   ```

2. Create the server using `createServer` method.  
   ```javascript
   var server = http.createServer(function (req, res) {
       res.writeHead(200, { 'Content-Type': 'text/html' });
       res.end("<h1>Hello, World!</h1>");
   });
   ```

3. Specify the port for the server using `listen` method.  
   ```javascript
   server.listen(5050);
   ```

4. Run the server using the command:  
   ```
   node fileName.js
   ```

---

## Request-Response Model in Node.js

### Understanding the Request-Response Model:
- **Request**: Sent by the client.
- **Response**: Sent back to the client.

### Example to Handle Multiple Routes
```javascript
var http = require('http');
var server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Home Page</h1>");
    } else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>About Us</h1>");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});
server.listen(5050, () => {
    console.log('Server running on port 5050');
});
```

---

## HTTP Client

### What is an HTTP Client?
An HTTP client is a software component enabling communication between a client and a web server via HTTP.

### Examples:
- **JavaScript**: Axios, Fetch, jQuery Ajax  
- **PHP**: cURL  
- **Java**: Volley, Retrofit  
- **C#**: RestSharp  

### HTTP Clients for Testing:
- **Postman**  
- **Fiddler**  

---

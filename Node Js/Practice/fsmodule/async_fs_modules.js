const { error } = require('console');
let fs = require('fs');
let http = require('http');
let url = require('url');

let server = http.createServer((req, res) => {

    /*
    // These are the ASYNCHRONOUS fs modules.
    if (req.url == '/home') {
        fs.readFile('home.html', (error, data) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/HTML' });
                res.write('<h1>404 File Not Found</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/HTML' });
                res.write(data);
                res.end();
            }

        });
    } else if (req.url == '/writeFileName') {
        let data = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>FS Module Practice</title>
            </head>
            <body>
                <h1> Welcome to Home using Edited Method</h1>
                <button onclick="alertMe()">Click Me</button>

                <script>
                    let alertMe = ()=>{
                        alert("You clicked the button Yoo!!");
                    }
                </script>
            </body>
            </html>
        `;
        fs.access('home.html', fs.constants.F_OK, (error) => {
            if (!error) {
                res.writeHead(409, { 'Content-Type': 'text/html' });
                res.write('<h1>File Already Exists</h1>');
                res.end();
            } else {
                fs.writeFile('home.html', data, (error) => {
                    if (error) {
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        res.write('<h1>Failed to Write File</h1>');
                        res.end();
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write('<h1>File Written Successfully</h1>');
                        res.end();
                    }
                });
            }
        });
    } else if (req.url == '/renameFile') {
        fs.rename('test.html', 'contact.html', (error) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/HTML' });
                res.write('<h1>404 Rename Failed</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/HTML' });
                res.write('<h1>Rename Successfull</h1>');
                res.end();
            }

        });
    } else if (req.url == '/checkFile') {
        fs.access('home.html', fs.constants.F_OK, (error) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>404 - File Not Found</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>File Exists</h1>');
                res.end();
            }
        });
    } else if (req.url == '/removeSpecificFile') {
        fs.unlink('dummy.txt', (error) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/HTML' });
                res.write('<h1>No File Found</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/HTML' });
                res.write("<h1>File Unlink Successfull</h1>");
                res.end();
            }
        })
    } else if (req.url == '/appendContentOnSpecificFile') {
        let data2 = `Hello World`
        fs.appendFile('home.html', data2, (error) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/HTML' });
                res.write('<h1>Failed to append</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/HTML' });
                res.write("<h1>Append Successfull</h1>");
                res.end();
            }
        })
    } else if (req.url == '/fileOpen') {
        fs.open('home.html', 'r', (error, fd) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>Failed to Open File</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>File Opened Successfully</h1>');
                res.end();
                fs.close(fd, () => { });
            }
        });
    } else if (req.url == '/makeNewDirectory') {
        fs.mkdir('testDirectory22', { recursive: false }, (error) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>Failed to Create Directory</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>Directory Created Successfully</h1>');
                res.end();
            }
        });
    } else if (req.url == '/removeDirectory') {
        fs.rm('testDirectory2', { recursive: true, force: true }, (error) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>Failed to Remove Directory</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>Directory Removed Successfully</h1>');
                res.end();
            }
        });
    } else if (req.url == '/readDirectory') {
        fs.readdir('testDirectory', (error, files) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>Failed to Read Directory</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>Directory Contents:</h1><ul>');
                files.forEach(file => {
                    res.write(`<li>${file}</li>`);
                });
                res.write('</ul>');
                res.end();
            }
        });
    }
    */
})

server.listen(5050)
console.log("Server Started")
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/home") {
        try {
            let filePath = fs.readFileSync('home.html');
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(filePath);
            res.end();
        }
        catch (error) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(error);
            res.end();
        }
    } else if (req.url == "/writeFileName") {
        let data = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>FS Module Practice</title>
            </head>
            <body>
                <h1> Welcome to Home [ using Sync Edited Method ]</h1>
                <button onclick="alertMe()">Click Me</button>

                <script>
                    let alertMe = ()=>{
                        alert("You clicked the button Yoo!!");
                    }
                </script>
            </body>
            </html>
        `;
        try {
            fs.writeFileSync('home.html', data);
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('<h1>File Written Successfully</h1>');
            res.end()
        } catch (error) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>File Written Failed</h1>');
            res.end()
        }

    }
    else if (req.url == "/renameFile") {
        try {
            fs.renameSync('contact.html', 'test.html');
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('<h1>File Rename Successfully</h1>');
            res.end()
        } catch (error) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>File Rename Failed</h1>');
            res.end()
        }
    }
    else if (req.url == "/checkFile") {
        if (fs.existsSync('test.html')) {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('<h1>File Exists</h1>');
            res.end()
        } else {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('<h1>File Not Exists</h1>');
            res.end()
        }


    }
    else if (req.url == '/removeSpecificFile') {
        try {
            fs.unlinkSync('dummy2.txt');
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>File Delete Successfully</h1>');
            res.end()
        }
        catch (error) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>File Delete Failed</h1>');
            res.end()
        }
    }
    else if (req.url == '/appendContentOnSpecificFile') {
        try {
            fs.appendFileSync('dummy2.txt', 'newly created file', 'utf-8');
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>File Append Successfully</h1>');
            res.end()
        }
        catch (error) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>File Append Failed</h1>');
            res.end()
        }
    }
    else if (req.url == '/fileOpen') {
        try {
            fs.openSync('dummy2.txt', 'r');
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>File Read Successfully</h1>');
            res.end()
        }
        catch (error) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>File Read Failed</h1>');
            res.end()
        }
    }
    else if (req.url == '/makeNewDirectory') {
        try {
            fs.mkdirSync('SyncMethodDirectoryAutoCreated')
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>Directory Create Successfully</h1>');
            res.end()
        }
        catch (error) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>Directory Create Failed</h1>');
            res.end()
        }
    }
    else if (req.url == '/removeDirectory') {
        try {
            fs.rmdirSync('SyncMethodDirectoryAutoCreated');
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>Directory Remove Successfully</h1>');
            res.end()
        }
        catch (error) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>Directory Remove Failed</h1>');
            res.end()
        }
    }
    else if (req.url == '/readDirectory') {
        try {
            let directory = fs.readdirSync('SyncMethodDirectoryAutoCreated');
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>Directory Read Successfully</h1>');
            directory.forEach(file => {
                res.write(`<li>${file}</li>`);
            });
            res.end()
        }
        catch (error) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>Directory Read Failed</h1>');
            res.end()
        }
    }
})

server.listen(5050);
console.log("server running ...")
const http = require("http");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // for unique IDs, install with: npm install uuid

const PORT = 4000;
const logFile = path.join(__dirname, "requests.log");

const server = http.createServer((req, res) => {
    let fileName = "";

    // Simple menu-based routing
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h2>Menu</h2>
            <ul>
                <li><a href="/text">View Text File</a></li>
                <li><a href="/json">View JSON File</a></li>
                <li><a href="/html">View HTML File</a></li>
            </ul>
        `);
        return;
    } 
    else if (req.url === "/text") {
        fileName = "sample.txt";
    } 
    else if (req.url === "/json") {
        fileName = "data.json";
    } 
    else if (req.url === "/html") {
        fileName = "page.html";
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
        return;
    }

    // Try reading requested file
    const filePath = path.join(__dirname, fileName);
    fs.readFile(filePath, (err, data) => {
        const logId = uuidv4();
        const timestamp = new Date().toISOString();

        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading file");

            // log failure
            fs.appendFileSync(logFile, `${logId} | ${timestamp} | ${fileName} | FAILED\n`);
        } else {
            // detect content type
            let contentType = "text/plain";
            if (fileName.endsWith(".html")) contentType = "text/html";
            if (fileName.endsWith(".json")) contentType = "application/json";

            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);

            // log success
            fs.appendFileSync(logFile, `${logId} | ${timestamp} | ${fileName} | SUCCESS\n`);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Menu-based server running at http://localhost:${PORT}`);
});

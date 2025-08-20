const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "sample.txt"); e

    const readStream = fs.createReadStream(filePath, "utf-8");

    res.writeHead(200, { "Content-Type": "text/plain" });
    readStream.pipe(res);  // send data chunk by chunk
});

server.listen(3000, () => {
    console.log("File server running at http://localhost:3000");
});
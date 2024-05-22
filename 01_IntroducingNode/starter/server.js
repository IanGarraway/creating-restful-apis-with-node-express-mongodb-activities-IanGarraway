

const http = require('http');

const PORT = 4000; 
const HOST = `localhost`;




http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello World`);
    console.log(`Server at HTTP://${HOST}:${PORT}`);
}).listen(PORT,HOST);
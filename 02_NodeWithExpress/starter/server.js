

require('dotenv').config();

const express = require('express');
const app = express();

// const PORT = 4000; 
// const HOST = `localhost`;

const port = process.env.PORT;
const host = process.env.HOST;

app.get('/', (req, res) => res.send(`Hello World`));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});
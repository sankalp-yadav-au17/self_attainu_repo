const express = require('express');
const {WebSocketServer} = require('ws')
const app = express();

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})

const wsServer = new WebSocketServer({port:3001});

wsServer.on('connection', (connObj) => {
    console.log(`connection established`)

    connObj.on('close', () => {
        console.log(`server connection close`)

    })

    connObj.on("message", (msg) => {
        console.log(`Client sends data ${msg}`);
    })
})
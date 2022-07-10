const express = require('express');
const {createServer} = require('http')
const {Server} = require('socket.io')


const app = express();
const httpServerInstance = createServer(app)
const socketioInstance = new Server(httpServerInstance)


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})



const PORT = 3000 || process.env.PORT

httpServerInstance.listen(PORT , () => {
    console.log(`Server started at ${PORT}`);
})



socketioInstance.on("connection", (socket)=>{
    console.log("Client Connected!!!");

    socket.on("chatMessage", (messageValue)=>{
        console.log(`Recieved: `,messageValue);
        socket.broadcast.emit("messageToAll",messageValue)
    })
})

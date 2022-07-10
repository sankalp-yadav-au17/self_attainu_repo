const express = require('express')
const {mylogger} = require('./Logger')

const app = express()

function myMiddleware(req, res, next) {
    
    mylogger.emit("request_received",req, res, next)
    // next()
}

app.use(myMiddleware)

app.get("/postWithComment",myMiddleware,(req,res)=>{
    res.sendFile(`${__dirname}/logs.txt`)
})


const PORT = 3000 || process.env.PORT
app.listen(PORT , ()=>{
    console.log(`server started at ${PORT}`)
})
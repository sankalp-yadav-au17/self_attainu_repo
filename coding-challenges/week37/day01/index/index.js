const express = require('express');
const {readFile, writeFileSync} = require('fs')

const app = express();

let count = 0
app.get('/',(req,res)=>{
    
    writeFileSync('sample.txt', `File count ${count++}`)
    res.sendFile(`${__dirname}/sample.txt`)
});

app.get("/reset",(req,res)=>{
    writeFileSync('sample.txt', `File count ${count=0}`)
    res.sendFile(`${__dirname}/sample.txt`)
})

const PORT = 3000 || process.env.PORT
app.listen(PORT,()=>{
    console.log("Server Started!!");
})
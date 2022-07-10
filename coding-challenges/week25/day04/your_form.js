const express = require("express")
const path = require("path")
const app = express()
app.use(express.urlencoded({extended:true}))
const PORT = 3000

app.get("/",(req,res)=>{
    res.send("Home route working")
})

app.get("/form",(req,res)=>{
    res.sendFile(`${__dirname}/your_file.html`)
})
app.post("/form/submit",(req,res)=>{
    // const str = `Server Received: Name: ${req.body.fullname}, Email: ${req.body.email}`
    res.send(req.body)
    console.log(req.body);
    })

app.get("*",(req,res)=>{
    res.send("EEraor")
})

app.listen(PORT, () =>{
    console.log("Server Started");
})
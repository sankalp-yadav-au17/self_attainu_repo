require(`dotenv`).config()
const express = require('express')

const app = express()
const cloudinary = require('cloudinary').v2
console.log(cloudinary.config().cloud_name)

app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.send(`HELLO`)
})
app.get("/upload",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)

})


app.post("/upload", (req,res)=>{
    cloudinary.uploader.upload(`${req.body.path}`, function(error, result) { console.log(result) });    
})

const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server started`);
})
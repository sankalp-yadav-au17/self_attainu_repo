const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.urlencoded({extended:true}))

const db_helper = require("./db.js")
db_helper.init()

const form_schema = new mongoose.Schema({
    title:{
        type: String,
        required:false,
    },
    first_name:{
        type: String,
        required:false,
    },
    date:{
        type: String,
        required:false,
    },
    time:{
        type: String,
        required:false,
    },
    position:{
        type: String,
        required:false
    },
    depart:{
        type: String,
        required:false,
    },
    manager:{
        type: String,
        required:false,
    },


})

const form_model = mongoose.model("form", form_schema)

app.get("/",(req,res)=>{

    res.sendFile(`${__dirname}/form.html`)
})

app.post("/",async(req,res)=>{
        
        const result = await form_model.create(req.body)
    
        res.send(result)
        console.log(result);        
    
    
})

const Port = process.env.Port || 3000
app.listen(Port,()=>{
    console.log("Server Started!!");
})

// Sankalp Yadav © 2021
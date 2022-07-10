const express = require("express")
const app = express()

const file_upload_middleware = require("express-fileupload")
app.use(file_upload_middleware())

app.use(express.static("public"))

const mongoose = require("mongoose")
app.use(express.urlencoded({extended:true}))

// form_image
// VcfxWIpN7WMAgrxq
const db_module = require("./db.js")
db_module.init()

 const form_schema = new mongoose.Schema({
    name:{
        type: String,
        required: false,
    
    },
    email:{
        type: String,
        required:false,
    }, 
    password:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:false,
    }
})

const form_model = mongoose.model("form",form_schema)

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/forms.html`)    
})

app.post("/collections",async(req,res)=>{
    try {
        const datas = req.body
        
        const file_data = req.files.image
        console.log("file received",file_data)
        const file_name = `${file_data.md5}-${file_data.name}`
        const file_path = `${__dirname}/public/user_uploads${file_name}`
        await file_data.mv(file_path)

        datas.image = `user_uploads/${file_name}`
        console.log("datas",datas);

        const result = await form_model.create(datas)

        res.send(result)
    } 
    catch (error) {
        res.send({
            error: true,
            error_obj: error
        })
    }
})
// getting all the datas
app.get("/collections",async(req,res)=>{
    try{
        const result = await form_model.find({})
        res.send(result)
    }
    catch (error){
        res.send({
            error: true,
            error_obj:error
        })
    }
})
// getting specific data
app.get("/collections/:uniqueId",async(req,res)=>{
    try{
        const result = await form_model.findById(req.params.uniqueId)
        res.send(result)
    }
    catch(error){
        res.send({
            error:true,
            error_obj: error
        })
    }
})
// updating datas
app.put("/collections/:uniqueID", async (req,res)=>{
    try{
        const datas = req.body
        const update_data = await form_model.findByIdAndUpdate(req.params.uniqueId, datas)
    }
    catch(error){
        res.send({
            error:true,
            error_obj: error
        })
    }
})
// deleting the datas
app.delete("/collections/:uniqueID",async(req,res)=>{
    try {
        const delete_data = await form_model.findByIdAndDelete(req.params.uniqueId)
        res.send(delete_data)
    } catch (error) {
        res.send({
            error:true,
            error_obj: error
        })
    }
})

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log("Server start ho gya!!");
})
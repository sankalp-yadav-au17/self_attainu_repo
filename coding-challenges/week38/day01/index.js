require(`dotenv`).config()

const {connectDatabase} = require('./db.js')
const {UserModel} = require('./model/usermodel.js')
const express = require('express');

const app = express();
app.use(express.json())

connectDatabase()

app.get("/userinfo/", async(req,res)=>{
    console.log(req.query);
    const response = await UserModel.find({ $or:[ {"username":req.query.username}, {"age":req.query.age}, {"id":req.query.id} ] })
    res.json(response)
})

app.post("/userinfo", async(req,res)=>{

    const addedUser = await UserModel.create(req.body)
    res.send(`Successfull${addedUser}`)
})


const PORT = 3000 || process.env.PORT
app.listen(PORT , ()=>{
    console.log(`Server started at ${PORT}`);
})



require(`dotenv`).config()

const {writeFileSync} = require('fs')

const mongoose = require('mongoose')
const {connectDatabase} = require("./db")

const express = require(`express`)

const app = express()
app.use(express.json())

connectDatabase()

const moviesSchema = new mongoose.Schema({
    "title": mongoose.Schema.Types.String,
    "year": mongoose.Schema.Types.Number,
    "runtime": mongoose.Schema.Types.Number,
    "released": mongoose.Schema.Types.Date,
    "poster": mongoose.Schema.Types.String,
    "plot": mongoose.Schema.Types.String,
    "fullplot": mongoose.Schema.Types.String,
    "lastupdated": mongoose.Schema.Types.String,
    "type": mongoose.Schema.Types.String,
    "directors": [mongoose.Schema.Types.String],
    "imdb": {
        "rating": mongoose.Schema.Types.Number,
        "votes": mongoose.Schema.Types.Number,
        "id": mongoose.Schema.Types.Number,
    },
    "cast": [mongoose.Schema.Types.String],
    "countries": [mongoose.Schema.Types.String],
    "genres": [mongoose.Schema.Types.String],
    "tomatoes": {
        "viewer": {
            "rating": mongoose.Schema.Types.Number,
            "numReviews": mongoose.Schema.Types.Number
        },
        "lastUpdated": mongoose.Schema.Types.Date
    },
    "num_mflix_comments": mongoose.Schema.Types.Number
    });

    moviesSchema.pre("find", function(){ 
        this._startTime = Date.now();
    })
    console.log(Date.now());

    moviesSchema.post("find", function(){ 
        console.log(`Time taken : ${Date.now()- this._startTime}`)
        writeFileSync("queryTime.txt", `Time taken : ${Date.now()- this._startTime}`)
    })


const Movie = mongoose.model('movie', moviesSchema);





app.get("/", async(req,res)=>{

    // const db = await connectDatabase()

    const listingRef = db.collection('movies')

    const result = await listingRef.aggregate([
          //stage 1 unrated movies and year 2000
        {
            $match: {
                "rated": "UNRATED",
                "year": 2000
            }
        },
        //stage 2 limiting to 17 results 
        {
            $limit: 17
        }
    
    
    ]).toArray()

    // const aggregate = await Airbnb.aggregate()

    res.json(result)
    // console.log(result)
})

app.get("/comedy", async(req,res)=>{

    const db = await connectDatabase()

    const listingRef = db.collection('movies')

    const result = await listingRef.aggregate([
        // stage 1 question mei dekh lena
        {
            $match:{
                $or:[
                    {
                        genres:"Comedy",
                        year: 2016
                    },
                    {
                        "imdb.rating":7
                    }
                ]
            }
        },
        // stage 2 linit
        {
            $limit:11
        }
    ]).toArray()


    res.json(result)
    // console.log(result)
})

const PORT =3000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server start ho gya at ${PORT}`);
})
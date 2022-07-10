require(`dotenv`).config()

const mongoose = require('mongoose')
const {connectDatabase} = require("./db")


const {Airbnb}= require('./models/airbnb')
const express = require(`express`)

const app = express()
app.use(express.json())

app.get("/", async(req,res)=>{

    const db = await connectDatabase()

    const listingRef = db.collection('listingsAndReviews')

    const result = await listingRef.aggregate([
        // stage 1 taking only spain as country
        {
            $match: {
                "address.country": "Spain"
            }
        },
//  stage 2 condition for price 
        {
            $match: {
                price:{
                    $lte: 15
                }
            }
        },
    // stage 3 review score 
        {
            $match:{
                "review_scores.review_scores_rating": {
                    $gte:75
                }
            }
        },
// stage 4 sorting in decending order
        {
            $sort:{
                price:-1
            }
        }
    
    
    ]).toArray()

    // const aggregate = await Airbnb.aggregate()

    res.json(result)
    console.log(result)
})

const PORT =3000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server start ho gya at ${PORT}`);
})
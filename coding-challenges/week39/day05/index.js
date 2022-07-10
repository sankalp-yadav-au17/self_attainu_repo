const express = require("express")
const {buildSchema} = require("graphql")
const {graphqlHTTP} = require("express-graphql")


const app = express()


const myschema = buildSchema(`
    type Query{
        jokes: String,
        evenNumber: Int,
        oddNumber: Int,
        userName: String,
        email: String,
        age: Int,
        price: Float,
        convertToLower(strToLower:String): String
    }
`)


const rootResolvers = {
    jokes: async() => {
        return null
    },
    oddNumber: () => {
        const valueOdd = Math.floor( Math.random() * 100 / 2 ) * 2;

        return valueOdd + 1;
    },
   
    evenNumber: () => {
        const valueEven = Math.floor( Math.random() * 100 / 2 ) * 2;

        return valueEven;
    },

    convertToLower: (argv) =>{
        const convertLowerString = argv.strToLower.toLowerCase()
        return convertLowerString
    },

    userName: () => {
        return "pasta123"
    },
    email: () => {
        return  "pasta123@gmail.com"
    },
    age: () => {
        return 23
    },
    price: () => {
        return 100
    }
}

app.use("/graphql", graphqlHTTP({
    schema: myschema,
    rootValue: rootResolvers,
    graphiql:true
}))


const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=>{
        console.log(`server starting on port ${PORT}`);
})
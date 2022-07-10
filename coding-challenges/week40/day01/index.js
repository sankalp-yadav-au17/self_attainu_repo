const express = require("express")
const {buildSchema} = require("graphql")
const {graphqlHTTP} = require("express-graphql")


const app = express()


const bookDb = [
    {
        id: "abc", 
        book: "Hary Puttar",
        price: "125"
    },
    {
        id: "def", 
        book: "Eclips",
        price: "135"
    }
]

const myschema = buildSchema(`
    type Book {
        id: String, 
        book: String,
        price: Int
    }
    type Query{
        books: [Book]
    }
    type mutation{
        addBooks(name:Sring, price:Float): Book
    }
`)


const rootResolvers = {
    books: () => {
        return bookDb
    },
    addBooks: ({name, price}) =>{
        const id = "1234567890"
        const newLength = bookDb.push({id, bookName:name, price})
        return bookDb[newLength-1]
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
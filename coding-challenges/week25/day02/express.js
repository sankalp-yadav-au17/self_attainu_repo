const exress = require("express")

const app = exress()
var count = 0
app.get("",(req, res)=>{
    count +=1
    res.send(`<h1>Times visited: ${count}</h1>`)
})

app.get ("/reset", (req,res) => {
    count = 0
    res.send("Reset Successful")
})

app.listen(8080)
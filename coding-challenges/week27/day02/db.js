const mongoose = require("mongoose")
const db_url = `mongodb+srv://interview-form:DlcTS7Q45OPXXM0v@cluster0.7fweu.mongodb.net/form_input?retryWrites=true&w=majority`

async function init(){
    await mongoose.connect(db_url)
}

module.exports = {
    init
}

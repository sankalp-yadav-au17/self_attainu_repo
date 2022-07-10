const mongoose = require('mongoose')

const CustomerScheme = new mongoose.Schema({
    name: {
        type:String,
        required: true
    }, 
    cars: {
        type:String,
        required: true
    }
})

const Customer = mongoose.model('Customer', CustomerScheme)

module.exports = {Customer}
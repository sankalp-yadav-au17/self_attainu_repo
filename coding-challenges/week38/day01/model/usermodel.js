const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.Number,
    username: mongoose.Schema.Types.String,
    age: Number
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = {UserModel}
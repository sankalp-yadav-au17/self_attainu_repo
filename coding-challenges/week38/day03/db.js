
const mongoose = require('mongoose')


const connectDatabase = async()=>{

    try {
        const result = await mongoose.connect(process.env.DATABASE_URL)

        return result.connection.db

    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {connectDatabase}
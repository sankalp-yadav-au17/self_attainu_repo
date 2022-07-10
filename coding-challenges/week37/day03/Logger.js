const {EventEmitter} = require('events');
const { appendFile } = require('fs/promises');
const {getFormattedString} = require('./utils')




class Logger extends EventEmitter {

}

const mylogger = new Logger()

mylogger.on("request_received", ()=>{
    console.log(`some request received from the client`);
})

// mylogger.on("request_received", (request)=>{
//     const message = getFormattedString(request)
//     console.log(message)
// })

mylogger.on("request_received", async (request, res, next)=>{
    const message = await getFormattedString(request)
    console.log(message);
    await appendFile(`./logs.txt`, JSON.stringify(message))
    next()
})



module.exports = {mylogger}

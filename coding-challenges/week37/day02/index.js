const express = require ("express")
const { parse } = require('csv-parse')
const {createReadStream} = require("fs")



const app = express()

const records = [];

const parser = parse({
    delimiter: ':'
});

const logReadStream = createReadStream(`train.csv`, `utf8`).pipe(parser)

parser.on('readable', function(){
  let record;
  while ((record = parser.read()) !== null) {
    records.push(record);
}
console.log(records)
});

parser.on("error",(error)=>{
    console.log(error.message)
})

parser.on("end",()=>{
    console.log(`end ho gya hai`)
})


const mongoose = require("mongoose")

const db_url = `mongodb+srv://form_image:VcfxWIpN7WMAgrxq@cluster0.bo5oq.mongodb.net/form_image_wala?retryWrites=true&w=majority`
// form_image
// VcfxWIpN7WMAgrxq
async function init(){
    await mongoose.connect(db_url)
}

module.exports = {
    init
}
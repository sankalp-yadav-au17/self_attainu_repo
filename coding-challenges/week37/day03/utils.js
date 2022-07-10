const axios = require('axios')
const URL_comment = `https://jsonplaceholder.typicode.com/comments`
const URL_post = `https://jsonplaceholder.typicode.com/posts`


const getFormattedString = async(request)=>{
    
    const res_comment = await axios.get(URL_comment)
    const res_post = await axios.get(URL_post)
    const result = []
    for (let index = 0; index < res_post.data.length; index++) {
       
        const element = {
            title: res_post.data[index].title,
            comments: res_comment.data[index].body 
        }
        result.push(element)
    }
    // console.log(result)
    return result
}

module.exports = {getFormattedString}
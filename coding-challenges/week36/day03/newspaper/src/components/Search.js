import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Newslist } from './Newslist'

function Search() {
    const [input , setinput] = useState("")
    const [data,setdata] = useState([])

    useEffect(() => {
        
        getUsers()
        
    }, [])


    const getUsers = async () => {

        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${data}&category=business&apiKey=7ba688d6bc6a4880949876ce1aaaeba1`)
        console.log(`🚀 ~ getUsers ~ response.data`, response.data.articles)
        
        setdata(response.data.articles)
    }
    const datacomponents = data.map((datas)=>{
        return <Newslist image={datas.urlToImage}/>
    })

    return (
        <div>
           <h1>Select World:</h1>
           <input onChange={(e)=>{setinput(e.target.value)}} type='text' maxlength="2" /> 
           <button onClick={()=>setdata(input)}>Submit</button>
            {datacomponents}
        </div>
    )
}

export  {Search}

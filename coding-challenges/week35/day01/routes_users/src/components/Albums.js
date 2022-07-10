import React from 'react'
import axios from "axios"
import { useState,useEffect } from "react"
import { useSearchParams } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom';


function Albums(props) {
    const navigate = useNavigate()

    const [query, setQuey] = useSearchParams()
    
    const [title, settitle] = useState([])
    useEffect(()=>{
        
        getUserid(query.get('userId'))
        
    },[])
    
    const getUserid = async(userId)=>{
        const response =await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        settitle(response.data)
        console.log(response.data[0]);

    }




    return (
        <div>
            <section className="d-flex flex-column">
            {title.map(u=>
                    <div className="card m-2" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{u.title}</h5>
                        </div>
                        <button onClick={()=>{ navigate(`/images?albumId=${u.id}` )} }>{u.id}</button>
                    </div>
            )}
            </section>
        </div>
    )
}

export  {Albums}

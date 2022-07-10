import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState,useEffect } from "react"
import axios from "axios"



function Images() {
    const [query, setQuey] = useSearchParams()
    const [image, setimgage] = useState([])


    useEffect(()=>{
        
        getUserid(query.get('albumId'))
        
    },[])

    const getUserid = async(albumId)=>{
        const response =await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        setimgage(response.data)
        console.log(response.data);

    }

    return (
        <div>
            <section className="d-flex flex-column">
            {image.map(u=>
                    <div className="card m-2" style={{width: "18rem"}}>
                        <div className="card-body">
                            <img src={u.thumbnailUrl}  />
                        </div>
                    </div>
            )}
            </section>
        </div>
    )
}

export  {Images}

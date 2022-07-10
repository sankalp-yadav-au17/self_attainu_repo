import axios from "axios"
import { useState,useEffect } from "react"
import {  useNavigate, createSearchParams } from 'react-router-dom';



function Users() {

    const navigate = useNavigate()
    const [users, setusers] = useState([])
    
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers = async()=>{
        const response =await axios.get(`https://jsonplaceholder.typicode.com/users`)
        setusers(response.data)
      
    }



    
    return(
        <main className="d-flex justify-content-center">        
        <section className="d-flex flex-column">
            {users.map(u=>
                    <div className="card m-2" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{u.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Username: {u.username}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Email: {u.email}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Phone: {u.phone}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Website: {u.website}</h6>
                        </div>
                        <button onClick={()=>{ navigate(`/albums?userId=${u.id}` )} }>{u.id}</button>
                    </div>
                )}
        </section>
           
        </main>
    )
    
}

export {Users}
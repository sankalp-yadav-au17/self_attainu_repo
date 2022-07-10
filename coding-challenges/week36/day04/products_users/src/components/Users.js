import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { UsersList } from './UsersList'

function Users() {
    const [Users, setUsers] = useState([])
    const [search, setsearch] = useState()
    useEffect(() => {
        getUser()
    }, [])
console.log(search);
    const getUser = async() => {
       const response = await axios.get(`https://fakestoreapi.com/users`)
       setUsers(response.data)
    }

    const datacomponents = Users.map((data)=>{
        return <UsersList username={data.username} />
    })
    

    return (
        <div>
            <input onChange={(e)=>{setsearch(e.target.value)}} type="text" placeholder='Search User' />
            {datacomponents}
        </div>
    )
}

export  {Users}
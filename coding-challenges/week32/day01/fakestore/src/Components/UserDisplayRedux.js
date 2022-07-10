import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../action";


function UserDisplayRedux(){
    const allUsers = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect (()=>{
        dispatch(getUsers())
    }, [])

    return (
        <div>
            {allUsers.map(u=> {
                return(
                    <main>
                        <img className= 'w-50' src={u.image}/>
                        <h1>{u.title}</h1>
                    </main>
                )
            } )}
        </div>
    )
}

export {UserDisplayRedux}



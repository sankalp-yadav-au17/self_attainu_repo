import React from 'react'
import { useContext } from 'react'
import {contextName} from "./Todolist" 

function Lists() {
    const context = useContext(contextName)
    // console.log("LIst se aa rha hia",context);

    const datacomponents = context.map((data)=>{
        return <li>{data}</li> 
    })

    return (
        <div>
            <ul>
                {datacomponents}
            </ul>
            Lists
        </div>
    )
}

export  {Lists}

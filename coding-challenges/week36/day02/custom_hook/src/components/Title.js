import React from 'react'
import { useState } from 'react'
import { useCustomHook } from './CustomHook'

function Title() {

    const [count , setcount] = useState(0)
    const title = `You have clicked ${count}`
    useCustomHook(title)


    const handlefunction = ()=>{
        setcount(count + 1)
    }

    return (
        <div>
            <button onClick={handlefunction}>Click here !</button>   
        </div>
    )
}

export  {Title}

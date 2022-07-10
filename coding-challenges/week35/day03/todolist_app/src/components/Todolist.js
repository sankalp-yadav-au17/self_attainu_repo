import React from 'react'
import { Lists } from './Lists'
import { createContext,useState } from 'react'

export const contextName = createContext()
function Todolist() {
    const [input, setinput] = useState("")
    const [additems, setadditems] = useState([])
    console.log("button",additems);
    return (
        <div>
            <h1>To Do Lists</h1>
            <input type="text" onChange={(e)=>setinput(e.target.value)} placeholder="Daalo kuch bhi"/>
            <button onClick={()=>setadditems([input,...additems])}>Add Items</button>
            <contextName.Provider value={additems}>
                <Lists/>
            </contextName.Provider>            
        </div>
    )
}

export  {Todolist}

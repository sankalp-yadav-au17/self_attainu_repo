import React from 'react'
import { Routes, useNavigate, Route } from 'react-router'
import { Anyblogarticle } from './Anyblogarticle'
import { Testarticle } from './Testarticle'

function Buttons() {
    const navigate = useNavigate()
    return (
        <div>
            <h2>This route is "/buttons"</h2>
            <button onClick={()=>{navigate(`/buttons/anyblogarticles`)}}>Click here to display "Anyblogarticles"</button>
            <button onClick={()=>{navigate(`/buttons/testarticles`)}}>Click here to display "Testarticles"</button>
            {/* <Routes path='/buttons'>
                <Route path="/anyblogarticles" element={<Anyblogarticle/>}/>
                <Route path="/testarticles" element={<Testarticle/>}/>
            </Routes> */}
        </div>
    )
}

export  {Buttons}

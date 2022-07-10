import React, { useState } from 'react'

function ShowHide() {

    const [showContent, setshowContent] = useState(true)

    return (
        <div>
            <button onClick={()=>{setshowContent( !showContent )}}>Toggle</button>
            {showContent && <h1>My big Content</h1>}
        </div>
    )
}

export default ShowHide

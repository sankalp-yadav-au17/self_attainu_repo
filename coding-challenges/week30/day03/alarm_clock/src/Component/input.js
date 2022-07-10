import { useEffect,useState } from "react";


function Input(props){

    const [input, setinput] = useState('')
    
    const passKarnaHai = ()=>{
        props.appKaCallBack(input)
        // props.appKaCallBack = input
        // console.log(props.appKaCallBack);
    }
    

    return(
        <main>
            <div className="d-flex justify-content-center">
              <h1>Set Alarm Time</h1>
            </div>
            <div className='d-flex justify-content-center flex-column'>
              <input onChange={e=>{setinput(e.target.value)}} type="time" placeholder="Enter the date in HH:MM:SS" />
            </div>
            <div className='d-flex justify-content-center'>
            <button onClick={passKarnaHai} className='col-4 my-3'>Submit</button>    
            </div>
        </main>
    )
}

export {Input}
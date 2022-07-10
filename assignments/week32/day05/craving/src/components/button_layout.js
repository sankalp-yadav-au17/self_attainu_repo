import {useDispatch} from "react-redux"
import { useState } from "react"
import axios from "axios"


function ButtonLayout (props){
    const [users, setUsers] = useState()

    const dispatch = useDispatch([])


    const valuedispatch = async()=>{
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        // console.log(users);
        // setUsers(response.data)
        dispatch({
            type:"BUTTON CLICK",
            payload: response.data
        })
        
    }

    return(
        <main className="container">
            <section className="border">
                <div className="text-center">
                    <h1>Feeling Hungury ?</h1>
                    <h3>Get a random meal by clicking below</h3>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={e=>{valuedispatch()}} className="bg-primary text-light p-2">GET MEAL 🍔</button>
                </div>
            </section>
        </main>
    )
}

export {ButtonLayout}
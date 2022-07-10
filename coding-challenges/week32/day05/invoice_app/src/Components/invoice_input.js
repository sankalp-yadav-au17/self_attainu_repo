import { useState } from "react";
import {useDispatch} from "react-redux"
function InvoiceInput(props) {

    const [products,setproducts] = useState("")
    const [units,setunits] = useState(0)
    const [price,setprice] = useState(0)

    const dispatch = useDispatch()

    const valuedispatch = ()=>{
        dispatch({
            type: "ADD PRODUCTS",
            payload: [products,units,price]
        })
      
    }

    return(
        <main className="container">
            <input onChange={e=> setproducts(e.target.value)} type="text" placeholder="products" />
            <input onChange={e=> setunits(e.target.value)} type="number" placeholder="units" />
            <input onChange={e=> setprice(e.target.value)} type="number" placeholder="price" /><br/>
            <button onClick={e=>{valuedispatch()}}>Submit</button>
        </main>
    )
}

export {InvoiceInput}
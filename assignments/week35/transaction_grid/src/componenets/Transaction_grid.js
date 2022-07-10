import React from 'react'
import { useContext, useState, useEffect } from 'react'
import {contextName} from "./Transaction_Page" 

function Transaction_grid() {
    const [balance, setbalance] = useState(0)
    const context = useContext(contextName)
    console.log(context);
    
    useEffect(()=>{

      if (context.length > 0) {
        if ( context[0].Card ==="Credit"){
          const sum = balance + Number(context[0].Amt)
          console.log(sum);
          setbalance(sum)
        }
        else if ( context[0].Card ==="Debit"){
          const sum = balance - Number(context[0].Amt)
          setbalance(sum)
        }
      }
     
  },[context])

  
  const tds = context.map((data, i, arr)=>{
          
    let bal = 0

    if (i === 0) {
      bal = data.Amt
    }else{
      
      if (data.Card === "Credit") {
        bal = arr[i - 1].Amt + data.Amt
      }else{
        bal = arr[i - 1].Amt - data.Amt
      }

    }

    return <tr key={i}>
            <td scope="row">{data.Date}/{data.Month}/{data.Year}</td>
            <td>{data.Descrip}</td>
            <td>{data.Card === "Credit" && data.Amt }</td>
            <td>{data.Card === "Debit" && data.Amt}</td>
            <td>Rs. {bal} </td>
        </tr> 
}).reverse()

    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Credit</th>
      <th scope="col">Debit</th>
      <th scope="col">Running Bal.</th>

    </tr>
  </thead>
  <tbody>
  {tds}

  </tbody>
</table>
        </div>
    )
}

export  {Transaction_grid}



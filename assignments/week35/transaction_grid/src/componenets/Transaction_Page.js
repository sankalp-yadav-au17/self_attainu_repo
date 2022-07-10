import React from 'react'
import { useState,createContext } from 'react'

import { Transaction_grid } from './Transaction_grid'

export const contextName = createContext()
function Transaction_Page() {
    
    const [card, setcard] = useState("")
    const [amount, setamount] = useState(0)
    const [description, setdescription] = useState("")
    const [data , setdata] = useState([])
    // console.log(card);
    return (
        <main>
        <div className="container">
        <div className="row">
            <div class="card col-md-6">
  
            <div class="card-body">
                <h5 class="card-title">New Transaction:</h5>
               

                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Transaciton Type:</label>
                    <div class="col-sm-10">
                     <select onChange={(e)=>setcard(e.target.value)} class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Amount</label>
                    <div class="col-sm-10">
                    <input onChange={(e)=>setamount(e.target.value)} type="number" class="form-control" id="inputPassword"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Discription</label>
                    <div class="col-sm-10">
                    <input onChange={(e) => setdescription(e.target.value)} type="text" class="form-control" id="inputPassword"/>
                    </div>
                </div>
                <button onClick={()=>setdata([...data, {Date: new Date().getDate(),Month: new Date().getMonth(),Year: new Date().getFullYear(),Card:card, Amt:Number(amount), Descrip:description}])} type="button" class="btn btn-primary btn-sm">Save</button> 
                <button type="button" class="btn btn-secondary btn-sm">Cancel</button>    
            </div>
                
            </div>
        </div>
            
        </div>

        <contextName.Provider value={data}>
            <Transaction_grid/>
        </contextName.Provider>
        </main>
    )
}

export  {Transaction_Page}

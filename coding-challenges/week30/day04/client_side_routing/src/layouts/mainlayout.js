import { Header } from "./Header"
import { Users } from "../Components/users"
import { Comments } from "../Components/comments"
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState,useEffect } from "react";




function Mainlayout(){

    const [apidata_comments, setapidata_comments] = useState([])
  const [apidata_users, setapidata_users] = useState([])

//  for comments
    useEffect(async()=>{
        const api = "https://jsonplaceholder.typicode.com/comments"
        const response = await fetch(api)
        const data = await response.json()
        setapidata_comments(data)
    },[])

    const dataComments = apidata_comments.map(data =>{
      return <Comments body={data.body} id={data.id} />
    })
    

//  for users
    useEffect(async()=>{
      const api = "https://jsonplaceholder.typicode.com/users"
      const response = await fetch(api)
      const data = await response.json()
      setapidata_users(data)
  },[])

  const dataUsers = apidata_users.map(data =>{
    return <Users email={data.email} id={data.id} />
  })


    return(
        <main className="row">
            <Header/>
            <section className='col-4'>
                
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                        <div class="fw-bold">
                            <Link to='/users'>Users</Link>
                        </div>
                        Click here to see the Users List
                        </div>
                        <span class="badge bg-primary rounded-pill">10</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                        <div class="fw-bold">
                            <Link to='/comments'>Comments</Link>
                        </div>
                        Click here to see Comments List
                        </div>
                        <span class="badge bg-primary rounded-pill">100</span>
                    </li>
                </ol>

            </section>
            <section className='col-8'>
                <Route exact path="/comments">
                    {dataComments}
                </Route>
                <Route exact path="/users"> 
                    {dataUsers}
                 </Route>
            </section>

        </main>
    )
}


export {Mainlayout}
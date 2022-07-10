import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./component/Products";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

function App() {
  
  const [productsdata, setproductsdata] = useState([])
  
  useEffect(()=>{
    getuser()
  },[])

  const getuser = async()=>{
    const response =await axios.get(`https://fakestoreapi.com/products`)
    // console.log(response.data);
    setproductsdata(response.data)
  }


  return (
    <main className="container">
      <section className="row">  
      <BrowserRouter>
        <Routes>

        <Route exact path="/" element={productsdata.map(u=>{
             return <div className="col-3"><Products title={u.title} price={u.price} description={u.description} category = {u.category} image={u.image} /></div>
          })} />
        </Routes>
      </BrowserRouter>
      </section>
    </main>
  );
}

export default App;

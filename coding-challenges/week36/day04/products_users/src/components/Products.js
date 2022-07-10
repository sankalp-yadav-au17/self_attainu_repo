import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ProductsList } from './ProductsList'


function Products() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async() => {
       const response = await axios.get(`https://fakestoreapi.com/products`);
       setProducts(response.data)
    }

    const datacomponents = Products.map((data)  =>{
        return <ProductsList username={data.title}/>
    })

    return (
        <div>
            <input type="text" placeholder='Search User' />
            {datacomponents}
        </div>
    )
}

export { Products }
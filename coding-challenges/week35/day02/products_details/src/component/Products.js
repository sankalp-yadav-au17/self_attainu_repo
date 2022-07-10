import React from 'react'
import PropTypes from 'prop-types'

function Products(props) {
    return (
        <main className="d-flex justify-content-center ">
            <div className="card" style={{width: "18rem"}}>
                <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div class="card" style={{width: "16rem"}}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Rs.{props.price}</li>
                            <li class="list-group-item">Category: {props.category}</li>
                        </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </main>
    )
}

Products.propTypes = {
    title: PropTypes.string,
    description:PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string
}



export  {Products}

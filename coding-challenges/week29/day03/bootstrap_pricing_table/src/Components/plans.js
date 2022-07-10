
function Plans(props){

// console.log(props);

    return(
        <section className="border w-25">
            <div>
                <h2>{props.pkage}</h2>
            </div>
            <div>
                <h2>{props.price}</h2>
            </div>
            <div>
                <h2>{props.bwidth}</h2>
            </div>
            <div>
                <h2>{props.storage}</h2>
            </div>
            <div>
                <h2>{props.acc}</h2>
            </div>
            <div>
                <h2>{props.domain}</h2>
            </div>
            <div>
                <h2>{props.supp}</h2>
            </div>
            <div>
                <button className='border border-danger text-danger bg-dark rounded-pill mb-3'>SIGNUP</button>
            </div>
        </section>
        
    
    )
}

export default Plans
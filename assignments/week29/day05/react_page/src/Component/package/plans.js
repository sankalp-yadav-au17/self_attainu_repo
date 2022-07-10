import "./plans.css"

function Plans(props){

    return(
        <main className='col-3'>
            <div className="border">
                <h2 className={props.textcolor}>{props.topname}</h2>
            </div>
            <div className="border">
                <h1>{props.header}</h1>
            </div>
            <div className="border">
                <h4>{props.headline}</h4>
            </div>
            <div className="border">
                <button className={props.buttoncolor}>Learn more</button>
            </div>
        </main>
   )
}

export {Plans}
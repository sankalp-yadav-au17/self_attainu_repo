

function Users(props){
    
    

    return(
        <main className="border border-3 m-3 text-center">
            <h1>{props.id}</h1> - {props.email}
        </main>
    )
}   

export {Users}
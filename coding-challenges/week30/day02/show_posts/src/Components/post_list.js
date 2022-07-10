

function PostList(props){
    console.log(props);
    

    return (
        <main>
            <section >
                
                <button onClick={props.onClick}>{props.title}</button>
            </section>
        </main>
    )
}

export {PostList}
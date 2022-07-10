

function InvoiceLayout(props) {
    return(
        <main className="d-flex justify-content-evenly">
            <section>
                <h1>{props.products}</h1>
            </section>
            <section>
                <h1>{props.units}</h1>
            </section>
            <section>
                <h1>{props.price}</h1>
            </section>
        </main>
    )
}

export {InvoiceLayout}
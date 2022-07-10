import "./form_layout.css"


function FormLayout(props){

    return(
        <section className="m-1">
            <div>
                Add Name:
            </div>
            <div>
                <input type="text" />
            </div>
       
            <div>
                Add Email:
            </div>
            <div>
                <input type="email" />
            </div>

            <div>
                Add Phome:
            </div>
            <div>
                <input type="tel" />
            </div>

            <div>
                Add Address:
            </div>
            <div>
                <input type="text" />
            </div>

            <div>
                Add Password:
            </div>
            <div>
                <input type="password" />
            </div>

            <div>
                <button>Submit</button>
            </div>
        </section>

    )
}


export {FormLayout}
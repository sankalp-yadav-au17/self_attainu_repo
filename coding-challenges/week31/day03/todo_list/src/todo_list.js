import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList(){
    const [inputText, setInputText] = useState("")
    const todoItems = useSelector(state => state)

    const dispatch = useDispatch()

    const lists = todoItems.map(list=>{
        return list
    })

    return(
        <main className='d-flex flex-column'>
            <section className="d-flex justify-content-center mt-5 pt-5">
                <h1>Todo List</h1>
            </section>
            <section className="d-flex justify-content-center">
                <input onChange={ e => setInputText(e.target.value) } value={inputText} type="text" />
            </section>
            <section className="d-flex justify-content-center mt-3">
                <button className='me-5' onClick={e=>{ dispatch( { type: "ADD ITEMS", payload: inputText } ) }}>Add</button>
                <button>Delete</button>
            </section>
            <section>
                <div className=' border'>
                    {lists}
                </div>
            </section>
      </main>
    )
}

export {TodoList}
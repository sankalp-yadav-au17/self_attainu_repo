import { createStore } from "redux";
export const inputValue = ""
const initialState = []

//action
const addItems = {
    type: "ADD ITEMS"
}

const deleteItems = {
    type: "DELETE ITEMS"
}

//reducer
const reducer = (state = initialState, action)=>{

    if (action.type === "ADD ITEMS"){
        
        // initialState.push(inputValue)

        
        return [...state, action.payload]
    }
    if (action.type === "DELETE ITEMS") {
        const items = initialState.indexOf(inputValue)

        initialState.splice(items, 1)

        return initialState
    }
    return state
    
}

//mystore
export const myAppStore = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




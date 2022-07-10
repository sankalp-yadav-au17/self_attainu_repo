import { createStore } from "redux";

//action
const addproducts = {
    type: "ADD PRODUCTS"
}


//reducer
const initialState = []
const reducer = (state = initialState, action)=>{

    if (action.type === "ADD PRODUCTS"){
        return [...state, action.payload]
    }
    return state
}



//mystore
export const mystore = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
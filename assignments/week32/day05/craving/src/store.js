import { createStore } from "redux";

// action
const button_click = {
    type: "BUTTON CLICK"
}

// reducer 
const initialState = {}
const reducer = (state = initialState, action) => {
    if (action.type === "BUTTON CLICK"){
        // console.log(action.payload);
        return action.payload
    }
    return state
}



//mystore
export const mystore = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
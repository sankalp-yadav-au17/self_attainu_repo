import {useReducer} from "react"

function reducer(state,action){
  switch(action.type){
    case "INCREMENT WALA BUTTON" :
      return {count:state.count+1 }
    case "DECREMENT WALA BUTTON" :
      return {count:state.count-1 }
      default:
        return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer,{ count: 0 })

  return (
    <>
      <div>Count : {state.count}</div>
      <button onClick={()=>dispatch({type:"INCREMENT WALA BUTTON"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT WALA BUTTON"})}>Decrement</button>
    </>
  );
}

export default App;

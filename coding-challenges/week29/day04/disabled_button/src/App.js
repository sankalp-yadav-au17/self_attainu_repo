import { Component } from "react";
import { Counter } from "./Component/Counter";



class App extends Component{

  constructor(props){
    super(props)

    this.state={
      counter: 10
    }
    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter(){
    this.setState((prevstate)=>{
      return{
          counter: prevstate.counter + 1
      }
  })
  }

  decrementCounter(){
    this.setState((prevstate)=>{
      return{
          counter: prevstate.counter - 1
      }
  })
  }

  render(){
    return (
      <div>
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
      </div>
    );
  }
}
export default App;

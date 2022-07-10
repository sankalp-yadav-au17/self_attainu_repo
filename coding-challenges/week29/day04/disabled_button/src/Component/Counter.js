import {Component} from "react"

class Counter extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            incre_wala_dis: false,
            decre_wala_dis: false
        }


        this.incrementValue = this.incrementValue.bind(this)
        this.decrementValue = this.decrementValue.bind(this)

    }

    incrementValue(){
        console.log("Value of log is ",this);
        this.props.increment()
        
        this.setState({
            incre_wala_dis: true
        })
        // timeout
        setTimeout(()=> this.setState({incre_wala_dis: false}), 5000)

    }

    decrementValue(){
        console.log("Value of log is ",this);
        this.props.decrement()

        this.setState({
            decre_wala_dis: true
        })
        // timeout
        setTimeout(()=> this.setState({decre_wala_dis: false}), 5000)
    }

    render(){
        return(
            <div className="container">
                <h1>Counter value is: {this.props.count}</h1>
                <button onClick={this.incrementValue} disabled={this.state.incre_wala_dis}>Increment</button>
                <button onClick={this.decrementValue} disabled={this.state.decre_wala_dis}>Decrement</button>
            </div>
        )
    }
}


export {Counter}
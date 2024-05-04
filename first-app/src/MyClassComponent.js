import React from "react";

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }
    increament = () => {
        this.setState({count: this.state.count + 1});
    }
    decreament = () => {
        this.setState({count: this.state.count - 1});
    }
    render(){
        return(
            
            <div>
                <h2>This My class Component</h2>
                <p>Count: {this.state.count}</p>
                <p>Props Calling: {this.props.name}, {this.props.age}</p>
                <button onClick={this.increament}>+</button>
                <button onClick={this.decreament}>-</button>
            </div>
        )
    }
}

export default MyClassComponent;
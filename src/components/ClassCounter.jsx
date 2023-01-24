import React from "react";

class ClassCounter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.pluse = this.pluse.bind(this)
        this.minus = this.minus.bind(this)
    }

    pluse(){
        this.setState({count: this.state.count + 1})
    }

    minus() {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.pluse}>+</button>
                <button onClick={this.minus}>-</button>

            </div>
        )
    }
}

export default ClassCounter;
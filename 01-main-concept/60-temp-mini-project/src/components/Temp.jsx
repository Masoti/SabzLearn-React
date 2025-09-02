import React, { Component } from "react";
import "./Temp.css";

class Temp extends Component {


    constructor (props) {
        super(props)

        this.state = {
            temp: 10,
            tempClass: 'cold'
        }

        this.addToTemp = this.addToTemp.bind(this)
        this.minusFromTemp = this.minusFromTemp.bind(this)
    }

    addToTemp() {
        if (this.state.temp > 29 ) {
            return false
        }

        this.setState(prevState => {
            return {temp: prevState.temp + 1}
        })

        if (this.state.temp > 14) {
            this.setState({tempClass: 'hot'})
        }
    }
    
    minusFromTemp() {
        if (this.state.temp < 1 ) {
            return false
        }
        
        this.setState(prevState => {
            return {temp: prevState.temp - 1}
        })

        if (this.state.temp <= 16) {
            this.setState({tempClass: 'cold'})
        }
    }
    
    render() {
        return (
            <div className="app-container">
                <div className="temperature-display-container">
                    <div className={`temperature-display ${this.state.tempClass}`}>
                        {this.state.temp}°C
                    </div>
                </div>
                <div className="button-container">
                    <button onClick={this.minusFromTemp}>-</button>
                    <button onClick={this.addToTemp}>+</button>
                </div>
            </div>
        );
    }
};

export default Temp;
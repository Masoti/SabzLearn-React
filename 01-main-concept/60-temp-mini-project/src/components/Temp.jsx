import React, { Component } from "react";
import "./Temp.css";

class Temp extends Component {

    render(0 {
        return (
            <div className="app-container">
                <div className="temperature-display-container">
                    <div className="temperature-display">
                        10°C
                    </div>
                </div>
                <div className="button-container">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        )
    })
};

export default Temp;
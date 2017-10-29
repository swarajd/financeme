import React, { Component } from 'react';
import './slider.css'

class Slider extends Component {

    constructor() {
        super();

        this.state = {
            value: 50,
        };
    }

    render() {
        return (
            <div className="sliderWrapper">
                <input type="range" min="1" max="100" value={this.state.value} className="slider" onChange={(e) => {
                    this.setState({
                        value: e.target.value
                    })
                }}/>
                <div>{this.state.value}</div>
            </div>
        )
    }
}

export default Slider;
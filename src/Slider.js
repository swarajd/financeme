import React, { Component } from 'react';
import './slider.css'

class Slider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <div className="sliderWrapper">
                <input type="range" min={this.props.min} max={this.props.max} value={this.state.value} className="slider" onChange={(e) => {
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
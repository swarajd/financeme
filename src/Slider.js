import React, { Component } from 'react';
import './slider.css'

class Slider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
        };
    }

    render() {
        return (
            <div className="sliderWrapper">
                <input type="range" min={this.props.min} max={this.props.max} value={this.state.value} className="slider" onChange={(e) => {
                    let val = e.target.value;
                    this.setState({
                        value: val
                    }, () => { this.props.updateFn(val, this.props.category) })
                }} />
                <div>{this.state.value}</div>
            </div>
        )
    }
}

export default Slider;
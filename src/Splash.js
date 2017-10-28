import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import './splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="Splash--body">
        <h1> Finance_Me </h1>
        <h3> Have you ever wondered what your parents do with all the money? </h3>
        <h4> You can play this game and learn why they are saying NO to all your requests. </h4>
        <div className="Splash--button-area">
          <Button bsStyle="primary">Play Now</Button>
          <Button bsStyle="link">Take the tutorial</Button>
        </div>
      </div>
    );
  }
}

export default Splash;

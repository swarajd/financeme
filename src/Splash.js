import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import './splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="Splash--background">
        <div className="Splash--body">
          <h1> Rock 101 </h1>
          <h3> Have you ever wondered what your parents do with all the money? </h3>
          <h3> You can play this game and learn why they are saying NO to all your requests. </h3>
          <div className="Splash--button-area">
            <Button bsStyle="primary" bsSize="large">Play Now</Button>
            <Button bsStyle="link" bsSize="large" className="Splash--button-area-tutorial">Take the tutorial</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;

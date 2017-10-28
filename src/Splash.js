import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class Splash extends Component {
  render() {
    return (
      <div>
        <h1> FinanceMe </h1>
        <h3> learn how to manage money </h3>
        <div>
          <Button bsStyle="primary">Play Now</Button>
          <Button bsStyle="link">Take the tutorial</Button>
        </div>
      </div>
    );
  }
}

export default Splash;

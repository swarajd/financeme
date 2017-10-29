import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Modal from 'react-bootstrap/lib/Modal';
import Slider from './Slider.js';
import './tutorial.css';
import woman from './woman.png'

class Tutorial extends Component {

  constructor() {

    let initialSalary = Math.floor(Math.random() * ((600-500)+1) + 500);

    super();
    this.state = {
      showModal: false,
      stage: 1,
      emergencyFunds: 0,
      savings: 0,
      loans: 0,
      unallocated: initialSalary,
      salary: initialSalary,
      goal: 5000,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.incrementStage = this.incrementStage.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  incrementStage() {
    if (this.state.stage < 6) {
      this.setState({
        stage: this.state.stage + 1
      });
    }
  }

  render() {
    return (
      <div>
        <div className="Tutorial--body">
          <div className="Tutorial--sidebar">
            <img className="circular--square" alt="woman" src={woman} />
            <div className="Tutorial--name">Grugina</div>
            <div className="Tutorial--current-cycle"> Stage: {this.state.stage} </div>
            <div className="Tutorial--salary">Salary: ${this.state.salary}</div>
            <div className="Tutorial--about"> Long ago there was a cave-person named Grugina. They looked up at the stars and dreamed of being a rockstar. So they decided to make a plan, and get {this.state.goal} rocks and build a spaceship to become a rockstar.</div>
            
          </div>
          <div className="Tutorial--content">
            <div className="Tutorial--content-rock-balance">
              {this.state.unallocated} rocks
            </div>
            <div className="Tutorial--content-category-sliders">
              <div className="Tutorial--content-scale">
                <div className="Tutorial--content-scale-title">
                  entertainment
                </div>
                <div className="Tutorial--content-scale-slider">
                  <Slider min={0} max={this.state.unallocated}/>
                </div>
              </div>
              <div className="Tutorial--content-scale">
                <div className="Tutorial--content-scale-title">
                  necessities
                </div>
                <div className="Tutorial--content-scale-slider">
                  <Slider min={0} max={this.state.unallocated}/>
                </div>
              </div>
              <div className="Tutorial--content-scale">
                <div className="Tutorial--content-scale-title">
                  emergency funds
                </div>
                <div className="Tutorial--content-scale-slider">
                  <Slider min={0} max={this.state.unallocated}/>
                </div>
              </div>
              <div className="Tutorial--content-scale">
                <div className="Tutorial--content-scale-title">
                  savings
                </div>
                <div className="Tutorial--content-scale-slider">
                  <Slider min={0} max={this.state.unallocated}/>
                </div>
              </div>
            </div>
            <div className="Tutorial--content-loans-wrapper">
              <Button bsStyle="primary" bsSize="large" onClick={this.open}> Loans </Button>
              <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Loans</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="Tutorial--loans-modal-buttons">
                      <Button bsStyle="primary" bsSize="large" className="loan-modal-button">Take Loan</Button>
                      <Button bsStyle="primary" bsSize="large" className="loan-modal-button">Pay Loan</Button>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
            <div className="Tutorial--next-cycle-wrapper">
              <Button bsStyle="primary" bsSize="large" onClick={this.incrementStage} disabled={this.state.stage === 6}> Next Cycle </Button>
            </div>
          </div>
        </div>
        <div className="Tutorial--footer">
          <div className="Tutorial--rock-stash">
            <h1>Rock Stash</h1>
            <div className="Tutorial--rock-stash-stats">
              <div className="Tutorial--rock-stash-stat">
                Emergency Funds: <br /> ${this.state.emergencyFunds}
              </div>
              <div className="Tutorial--rock-stash-stat">
                Savings: <br /> ${this.state.savings}
              </div>
              <div className="Tutorial--rock-stash-stat">
                Loans: <br /> ${this.state.loans}
              </div>
            </div>
          </div>
          <div className="Tutorial--joy-meter">
            <h1>Joy Meter</h1>
            <div className="progressWrapper">
              <ProgressBar active now={50} label={`${50}%`} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial;

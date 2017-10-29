import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Modal from 'react-bootstrap/lib/Modal';
import Slider from './Slider.js';
import './tutorial.css';
import woman from './woman.png'

import event from './EventGenerator.js';

class Tutorial extends Component {

  constructor() {

    let initialSalary = Math.floor(Math.random() * ((600 - 500) + 1) + 500);

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
      joy: 50,
      currentAllocated: 0,
      entertainmentSlider: 0,
      necessitiesSlider: 0,
      emergencySlider: 0,
      savingsSlider: 0,
      currentEvent: [],
      choiceEventFulfilled: true,
      normalEventFulfilled: true,
      curLoanAmt: 0
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.closeChoice = this.closeChoice.bind(this);
    this.closeNormal = this.closeNormal.bind(this);
    this.incrementStage = this.incrementStage.bind(this);
    this.incrementValues = this.incrementValues.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
    this.updateAllocation = this.updateAllocation.bind(this);
    this.currentAllocValid = this.currentAllocValid.bind(this);
    this.updateNormal = this.updateNormal.bind(this);
  }

  updateChoice() {

  }

  updateNormal() {
    this.setState({
      unallocated: this.state.unallocated + this.state.currentEvent[1],
      joy: this.state.joy + this.state.currentEvent[2],
    });
    this.closeNormal();
  }

  close() {
    this.setState({ showModal: false });
  }

  closeChoice() {
    this.setState({ choiceEventFulfilled: true });
  }

  closeNormal() {
    this.setState({ normalEventFulfilled: true });
  }

  open() {
    this.setState({ showModal: true });
  }

  incrementStage() {
    if (this.state.stage < 6) {
      let curEvt = event();
      let type = curEvt[3].length === 0 ? "normalEventFulfilled" : "choiceEventFulfilled";
      this.setState({
        stage: this.state.stage + 1,
        currentEvent: curEvt,
        [type]: false,
      });
      this.incrementValues();
      console.log(curEvt);
    }
  }

  incrementValues() {
    this.setState({
      unallocated: this.state.unallocated + this.state.salary,
      emergencyFunds: this.state.emergencyFunds + parseInt(this.state.emergencySlider, 10),
      savings: this.state.savings + parseInt(this.state.savingsSlider, 10),
      loans: this.state.loans + parseInt(this.state.curLoanAmt, 10)
    })
  }

  updateSlider(value, category) {
    this.setState({
      [category]: value
    }, this.updateAllocation);
  }

  updateAllocation() {
    this.setState({
      currentAllocated: parseInt(this.state.entertainmentSlider, 10) +
      parseInt(this.state.necessitiesSlider, 10) +
      parseInt(this.state.emergencySlider, 10) +
      parseInt(this.state.savingsSlider, 10)
    })
  }

  currentAllocValid() {
    return (this.state.currentAllocated <= this.state.unallocated);
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
              {this.state.unallocated} rocks, <span className={this.currentAllocValid() ? "" : "invalid-allocation"}>{this.state.currentAllocated} rocks</span>
            </div>
            <div className="Tutorial--content-category-sliders">
              <div className="Tutorial--content-scale">
                <div className="Tutorial--content-scale-title">
                  entertainment
                </div>
                <div className="Tutorial--content-scale-slider">
                  <Slider min={0} value={this.state.entertainmentSlider} max={this.state.unallocated} remaining={this.state.unallocated - this.state.currentAllocated} updateFn={this.updateSlider} category="entertainmentSlider" />
                </div>
              </div>
              <div className="Tutorial--content-scale">
                <div className="Tutorial--content-scale-title">
                  necessities
                </div>
                <div className="Tutorial--content-scale-slider">
                  <Slider min={0} value={this.state.necessitiesSlider} max={this.state.unallocated} remaining={this.state.unallocated - this.state.currentAllocated} updateFn={this.updateSlider} category="necessitiesSlider" />
                </div>
              </div>
              <div className="Tutorial--content-scale">
                <div className="Tutorial--content-scale-title">
                  emergency funds
                </div>
                <div className="Tutorial--content-scale-slider">
                  <Slider min={0} value={this.state.emergencySlider} max={this.state.unallocated} remaining={this.state.unallocated - this.state.currentAllocated} updateFn={this.updateSlider} category="emergencySlider" />
                </div>
              </div>
              <div className="Tutorial--content-scale">
                <div className="Tutorial--content-scale-title">
                  savings
                </div>
                <div className="Tutorial--content-scale-slider">
                  <Slider min={0} value={this.state.savingsSlider} max={this.state.unallocated} remaining={this.state.unallocated - this.state.currentAllocated} updateFn={this.updateSlider} category="savingsSlider" />
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
              <Button bsStyle="primary" bsSize="large" onClick={this.incrementStage} disabled={this.state.stage === 6 || !this.currentAllocValid()}> Next Cycle </Button>
              <Modal show={!this.state.choiceEventFulfilled} onHide={this.closeChoice}>
                <Modal.Header closeButton>
                  <Modal.Title>{this.state.currentEvent[0]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="Tutorial--loans-modal-buttons">
                    <Button bsStyle="primary" bsSize="large" className="loan-modal-button">{this.state.currentEvent.length > 0 ? this.state.currentEvent[3][0] : "yes"}</Button>
                    <Button bsStyle="primary" bsSize="large" className="loan-modal-button">{this.state.currentEvent.length > 0 ? this.state.currentEvent[3][1] : "no"}</Button>
                  </div>
                </Modal.Body>
              </Modal>

              <Modal show={!this.state.normalEventFulfilled} onHide={this.closeNormal}>
                <Modal.Header closeButton>
                  <Modal.Title>{this.state.currentEvent[0]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="Tutorial--loans-modal-buttons">
                    <Button bsStyle="primary" bsSize="large" onClick={this.updateNormal}>OK</Button>
                  </div>
                </Modal.Body>
              </Modal>
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
              <ProgressBar active now={this.state.joy} label={`${this.state.joy}%`} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial;

import React, { Component } from 'react';
import './tutorial.css';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

class EventChoice extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <div className="Tutorial--content-loans-wrapper">
        <Modal show={true}>
          <div className="modal-header">
          Buy a new rocking chair or invest in the rock market?
          </div>
          <Modal.Body>
            <div className="Tutorial--loans-modal-buttons">
                <Button bsStyle="primary" bsSize="large" className="loan-modal-button">Gain 11 joy</Button>
                <Button bsStyle="primary" bsSize="large" className="loan-modal-button">Gain 101 rocks</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

}

export default EventChoice;

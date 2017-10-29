import React, { Component } from 'react';
import './tutorial.css';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

class EventNormal extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="Tutorial--content-loans-wrapper">
        <Modal show={this.state.showModal} onHide={this.close}>
          <div className="modal-header">
          You won rock lottery. Solid stuff! Gained 108 rocks AND gained 10 joy.
          </div>
          <Modal.Body>
            <div className="Tutorial--loans-modal-buttons">
                <Button bsStyle="primary" bsSize="large" onClick={this.close}> Ok </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

}

export default EventNormal;

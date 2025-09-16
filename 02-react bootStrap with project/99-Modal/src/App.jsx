import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap';


export default class App extends Component {

  state = {
    showModal: true
  }
  render() {
    return (
      <div 
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal centered show={this.state.showModal} onHide={() => this.setState({showModal: false})}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Are you sure for remove file?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary">Yes, Remove</Button>
            <Button variant="secondary" onClick={() => this.setState({showModal: false})}>Cancel</Button>
          </Modal.Footer>
        </Modal>

        <Button onClick={() => this.setState({showModal: true})}>Remove File</Button>
      </div>
    )
  }
}



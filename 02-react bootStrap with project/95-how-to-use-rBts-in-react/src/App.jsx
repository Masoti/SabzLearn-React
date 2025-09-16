import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';
import AlertLink from 'react-bootstrap/AlertLink'
import Button from 'react-bootstrap/Button'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <hr />
        <Alert  variant="success">
          Your password is valid and welcome to your panel:) <AlertLink href="#">Panel</AlertLink>
        </Alert>
        <hr />
        <Button variant="danger">Cancel</Button>
      </div>
    )
  }
}



import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Menus from './components/Menus/Menus'

export default class App extends Component {
  render() {
    return (
      <Container fluid >
        <Row>
          <Menus></Menus>
          <Col>1</Col>
          <Col>2</Col>
        </Row>
      </Container>
    )
  }
}



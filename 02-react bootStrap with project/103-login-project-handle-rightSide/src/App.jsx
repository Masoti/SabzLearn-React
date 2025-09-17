import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Menus from './components/Menus/Menus'
import RightSide from './components/RightSide/RightSide'
import LeftSide from './components/LeftSide/LeftSide'

export default class App extends Component {
  render() {
    return (
      <Container fluid >
        <Row>
          <Menus></Menus>
          <Col xs={12} md={6}>
            <LeftSide></LeftSide>
          </Col>
          <Col xs={12} md={6}>
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
    )
  }
}



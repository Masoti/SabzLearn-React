import React, { Component } from 'react'
import {Container, Row, Col}  from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      // <Container>
      //   <Row>
      //     <Col>1 of 2</Col>
      //     <Col>2 of 2</Col>
      //   </Row>
      //   <Row>
      //     <Col>1 of 3</Col>
      //     <Col>2 of 3</Col>
      //     <Col>3 of 3</Col>
      //   </Row>
      // </Container>

      // <Container fluid>
      //   <Row>
      //     <Col>1 of 2</Col>
      //     <Col>2 of 2</Col>
      //   </Row>
      //   <Row>
      //     <Col>1 of 3</Col>
      //     <Col>2 of 3</Col>
      //     <Col>3 of 3</Col>
      //   </Row>
      // </Container>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col xs={12} md={4} sm={6}>1 of 3</Col>
          <Col xs={12} md={4} sm={6}>2 of 3</Col>
          <Col xs={12} md={4} sm={6}>3 of 3</Col>
        </Row>
      </Container>
    )
  }
}



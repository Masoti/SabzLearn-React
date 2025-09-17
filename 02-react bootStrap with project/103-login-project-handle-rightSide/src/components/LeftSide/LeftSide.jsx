import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export default class LeftSide extends Component {
render() {
    return (
    <div>
    <Form>
        <br /><br /><br /><br /><br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="enterUserName" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Login
        </Button>
        </Form> 
    </div>
    )
}
}

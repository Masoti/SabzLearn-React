import React, { Component } from 'react'
// import Alert from 'react-bootstrap/Alert';
import {Alert, Button} from 'react-bootstrap'

export default class App extends Component {

  state = {
    loading: false
  }

  loadingHandler () {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <hr />
        <Button variant="outline-danger">Click Me!</Button>
        <br />
        <br />
        <Button variant="outline-success" size='lg'>Click Me!</Button>
        <br />
        <br />
        <Button variant="outline-warning" size='sm'>Click Me!</Button>
        <br />
        <br />
        <Button variant="outline-success" disabled>Register</Button>
        <br />
        <br />
        <Button
          variant="primary"
          onClick={this.loadingHandler.bind(this)}
          disabled={this.state.loading}
        >
          {this.state.loading ? 'Loading...' : 'Download File'}
        </Button>
      </div>
    )
  }
}



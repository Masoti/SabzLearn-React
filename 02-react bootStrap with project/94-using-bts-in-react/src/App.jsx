import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <hr />
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-danger">Primary</button>
        <hr />
        <div className="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
      </div>
    )
  }
}



import React, { Component } from 'react'

export class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      name: 'SabzLearn'
    }
  }

  clickHandler (num1, num2,  event) {
    console.log("Num1:" + num1 + " - Num2:" + num2 + " - Sum:" + (num1+num2));
    console.log(event)
    console.log(event.target)
    console.log(event.target.innerHTML)
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.clickHandler.bind(this, 12, 3)}>Click Me</button> */}
        {/* <button onClick={() => this.clickHandler(7, 4)}>Click Me</button> */}
        <button onClick={(event) => this.clickHandler(7, 4, event)}>Click Me</button>
      </div>
    )
  }
}

export default App
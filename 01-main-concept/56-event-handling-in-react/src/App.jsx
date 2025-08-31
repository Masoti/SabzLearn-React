import React from 'react'
import User from './User'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      users: [
        { id:1, name: 'Masoud' },
        { id:2, name: 'Babak' },
        { id:3, name: 'Amin' },
        { id:4, name: 'Sajad' },
      ]
    }

    this.code = 25
  }  

  clickHandler () {
    alert ('click shod :)')
    console.log(this);
  }
  
  keyDownHandler () {
    console.log('Type shod');    
  }

    render () {
      return (
        <div>
          <h1 onClick={this.clickHandler}>{this.code}</h1>
          <input type="text" onKeyDown={this.keyDownHandler} />
          <User {...this.state.users[0]} />
          <User {...this.state.users[1]} />
          <User {...this.state.users[2]} />
          <User {...this.state.users[3]} />
        </div>
      )
    }
}
export default App
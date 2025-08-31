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
  /*راه حل سوم*/
    this.clickHandler = this.clickHandler.bind(this)
    this.keyDownHandler = this.keyDownHandler.bind(this)

    this.code = 25
  }  

  clickHandler () {
    this.code = 35
    console.log(this);
  }
  
  keyDownHandler () {
    console.log('Type shod');    
    console.log(this);
    this.code = 45
  }

    render () {
      return (
        <div>
          {/* راه حل اول */}
          {/* <h1 onClick={this.clickHandler.bind(this)}>{this.code}</h1>  */}
          {/* راه حل دوم */}
          {/* <h1 onClick={() => this.clickHandler()}>{this.code}</h1>  */}
          {/* راه حل سوم */}
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
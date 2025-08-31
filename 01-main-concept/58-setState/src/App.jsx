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
        { id:4, name: 'mansour' },
      ],
      scores: [23, 21, 90, 83, 29],
      counter: 0,
    }
    this.code = 25
  }  

  // راه اول
  // changeUsersHandler() {
  //   this.setState({
  //     users: [
  //       {id: 1, name: 'Azim'},
  //       {id: 2, name: 'Amir'},
  //       {id: 3, name: 'Amin'},
  //       {id: 4, name: 'Sajad'},
  //     ]
  //   })
  // }

  // راه دوم
  changeUsersHandler() {
    this.setState((prevState) => {
      console.log(prevState)
      return {users: [
                      {id: 1, name: 'Azim'},
                      {id: 2, name: 'Amir'},
                      {id: 3, name: 'Amin'},
                      {id: 4, name: 'Sajad'},
                    ]}
    })
  }

  // changeUsersHandler() {
  //   this.setState((prevState) => {
  //     console.log(prevState)
  //     return {counter: prevState.counter + 1}
  //   })
  // }

    render () {
      return (
        <div>
          <h1>{this.state.counter}</h1>
          <button onClick={this.changeUsersHandler.bind(this)}>Change User</button>
          <User {...this.state.users[0]} />
          <User {...this.state.users[1]} />
          <User {...this.state.users[2]} />
          <User {...this.state.users[3]} />
        </div>
      )
    }
}
export default App
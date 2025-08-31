import React from 'react'
import User from './User'

class App extends React.Component {

    constructor (props) {
      super(props)
//اتفاق می افتد. rerender آنگاه  Dom در state بلافاصله پس از تغییر 
      this.state = {
        users: [
          { id:1, name: 'Masoud' },
          { id:2, name: 'Babak' },
          { id:3, name: 'Amin' },
          { id:4, name: 'Sajad' },
        ]
      }

      // this.code = 20 //بتونه تغییرات رو تشخیص بده Virtual Dom اینه که state دلیل استفاده از نام
        setTimeout(() => {
          this.setState ({
            users: [
              { id:1, name: 'Bahram' },
              { id:2, name: 'Shahram' },
              { id:3, name: 'Shahbaz' },
              { id:4, name: 'Vahid' },
            ]
          })
        }, 5000)
    }
    
      
    render () {
      return (
        <div>
          {/* {this.code} */}
          <User {...this.state.users[0]} />
          <User {...this.state.users[1]} />
          <User {...this.state.users[2]} />
          <User {...this.state.users[3]} />
        </div>
      )
    }
}

export default App
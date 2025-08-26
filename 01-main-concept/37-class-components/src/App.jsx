// import React from 'react'

// class App extends React.Component {

// }    OR   ------>

// import React, { Component } from 'react'
// import './App.css'
// import Karbar from './Users/Users'

// class App extends Component {
//   render () {
//     return (
//       <div>
//           <h1>SabzLearn Reacr Course :)</h1>
//           <hr />
//           <Karbar></Karbar>
//           <Karbar />
//       </div>
//     )
//   }
// }

// export default App


import React, { Component } from 'react'
import './App.css'
import Users from './Users/Users'

class App extends Component {
  render () {
    return (
      <div>
          <h1>SabzLearn React Course :)</h1>
          <hr />
          <Users></Users>
          <Users />
      </div>
    )
  }
}

export default App
import React, { Component } from 'react'

export class App extends Component {

  constructor (props) {
      super(props)
      
      this.state = {
        age: 19
      }
    }

  render() {

    // if (this.state.age > 18) {
    //   return (
    //     <div>
    //       شما با موفقیت وارد وبسایت شدید
    //     </div>
    //   )
    // } else {
    //   return (
    //       <div>
    //         شما مجاز به ورود به وبسایت نیستید
    //       </div>
    //   )
    // }


    
  // let errorMessage = null

  // if (this.state.age < 18 ) {
  //   errorMessage = <h1>شما مجاز به ورود به وبسایت نیستید</h1>
  // } else {
  //   errorMessage = <h1>شما با موفقیت وارد وبسایت شدید</h1>
  // }

  // return (
  //   <div>
  //     {errorMessage}
  //   </div>
  // )


  // return (
  //   <div>
  //     {this.state.age < 18 && (
  //       <h1>شما مجاز به ورود به وبسایت نیستید</h1>
  //     )}
  //   </div>
  // )


  return (
    <div>
      شما مجاز به ورود به سایت {this.state.age > 18 ? 'می باشید' : 'نمی باشید' }
    </div>
  )
  }
}

export default App

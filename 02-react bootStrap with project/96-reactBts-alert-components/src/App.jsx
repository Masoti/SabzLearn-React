import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'

// export default class App extends Component {
  
//   render() {
  //     return (
    //       <div>
    //         <h1>Hello React!</h1>
    //         <hr />
    //         <Alert variant="success">
//           <Alert.Heading>Hey, nice to see you</Alert.Heading>
//           <p>
//             Aww yeah, you successfully read this important alert message. This
//             example text is going to run a bit longer so that you can see how
//             spacing within an alert works with this kind of content.
//           </p>
//           <hr />
//           <p className="mb-0">
//             Whenever you need to, be sure to use margin utilities to keep things
//             nice and tidy.
//           </p>
//         </Alert>
//       </div>
//     )
//   }
// }

// import { useState } from 'react';
// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <Alert show={show} variant="success">
//         <Alert.Heading>My Alert</Alert.Heading>
//         <p>
//           Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//           lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//           fermentum.
//         </p>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={() => setShow(false)} variant="outline-success">
//             Close me
//           </Button>
//         </div>
//       </Alert>

//       {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//     </>
//   );
// }

// export default App;

export default class App extends Component {

  state = {
    showAlert: true
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <hr />
        {this.state.showAlert ? (
          <Alert variant="success" onClose={() => this.setState({showAlert: false})} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
        </Alert>
        ) : (
          <Button variant="danger" onClick={() => this.setState({showAlert: true})}>Show Alert</Button>
        )}
      </div>
    )
  }
}




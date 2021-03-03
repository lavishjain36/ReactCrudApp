import React, { Component } from "react";

//Functional component
// const Student = (props) => {
//   return <h1>Hello Lavish {props.children} </h1>;
// };

// Class component
class App extends Component {
  render() {
    return <h1>Hello Lavish {this.props.children} </h1>;
  }
}
export default App;

import React, { Component } from "react";

//Functional component
// const Student = (props) => {
//   return <h1>Hello Lavish {props.children} </h1>;
// };

// Class component
class Student extends Component {
  render() {
    return <h1>Hello Lavish {this.props.children} </h1>;
  }
}
export default Student;

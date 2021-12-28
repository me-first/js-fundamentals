import React, { Component } from "react";
import classes from "./Count.module.css";
import withClass from "./withClass";

class Count extends Component {
  state = {
    counter: 0,
  };

  increaseCountHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increaseCountHandler}>Click To Increase</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default withClass(Count, classes);

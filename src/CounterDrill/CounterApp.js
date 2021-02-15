import React, { Component } from "react";

class CounterApp extends Component {
  render() {
    const count = this.props.count;
    return (
      <div className="Counter">
        <h1>Counter</h1>
        <h2>{count}</h2>
      </div>
    );
  }
}
export default CounterApp;
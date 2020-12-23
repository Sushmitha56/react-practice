import React, { Component } from "react";

class C2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        hiii
        <button onClick={this.incrementCount}>count{this.state.count}</button>
      </div>
    );
  }
}
export default C2;

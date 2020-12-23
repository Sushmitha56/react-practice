import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    let l = [];

    this.state = {
      userName: ""
    };
  }

  handleChange = e => {
    event.preventDefault();

    this.setState({
      userName: e.target.value
    });
  };

  addItems = () => {
    l.push({ this: state.userName });
  };

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleChange} />
        <button onClick={this.addItems}>submit</button>
        {this.l}
      </div>
    );
  }
}
export default TodoList;

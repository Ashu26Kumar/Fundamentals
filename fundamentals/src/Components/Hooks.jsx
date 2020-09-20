import React, { Component } from "react";

export default class Hooks extends Component {
  constructor(props) {
    super(props);
    console.log("from constructor");
    this.state = {
      salute: false,
    };
  }

  static getDerievedStateFromProps() {
    console.log("from getderievedstatefromprops");
  }

  componentDidMount() {
    console.log("from componentDidMount");
  }
  getSnapshotBeforeUpdate() {
    console.log(" from getSnapshotBeforeUpdate");
    return { ...this.state };
  }
  shouldComponentUpdate() {
    let { salute } = this.state;
    console.log(salute, "from should component update");
    if (salute) return false;
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot, "from componentDidUpdate");
  }
  handle = () => {
    this.setState({ salute: true });
  };
  render() {
    console.log("render");
    return (
      <button onClick={this.handle}>{this.state.salute.toString()}</button>
    );
  }
}

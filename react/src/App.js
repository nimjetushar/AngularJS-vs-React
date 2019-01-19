import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    const list = [];
    for (let i = 0; i < 2000; i++) {
      list.push("test");
    }
    this.state = {
      list: list
    }
  }

  generateList() {
    const list = [],
      len = this.state.list.length,
      item = this.state.list;

    for (let i = 0; i < len; i++) {
      const ele = <div key={i}><input type="checkbox" /><span>{item[i]}</span></div>
      list.push(ele);
    }
    return list;
  }

  render() {
    return (
      <div>{this.generateList()}</div>
    );
  }
}

export default App;

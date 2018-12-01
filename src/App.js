import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }
  state = {
    counter:0
  }
  increment=()=> {
    this.setState({
      counter: this.state.counter+1
    })
  }
  decrement=()=> {
    this.setState({
      counter: this.state.counter-1
    })
  }
  render() {
    return (
      <div className="App">
          {this.state.counter}
          <button onClick = { this.increment }>
            increment
          </button>
          <button onClick = { this.decrement }>
            decrement
          </button>
      </div>
    );
  }
}

export default App;

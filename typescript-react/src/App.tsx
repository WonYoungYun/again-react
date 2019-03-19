import React, { Component } from 'react';
import Counter from './Counter';

interface AppProps { }

interface AppState {
  number: number;
}

class App extends Component<AppProps, AppState> {
  state = {
    number: 1
  };

  handleIncrement = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  handleDecrement = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <Counter number={this.state.number} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
    );
  }
}

export default App;

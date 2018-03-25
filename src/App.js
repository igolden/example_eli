import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MessageEdit from './MessageEdit';
import MessageDisplay from './MessageDisplay';
import Counter from './Counter';
import CountDisplay from './CountDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World',
      count: 0,
    };
  }

  incrementCount = () => {
    let _count = this.state.count;
    let newCount = _count + 1;
    this.setState({count: newCount});
  }

  decrementCount = () => {
    let _count = this.state.count;
    let newCount = _count - 1;
    this.setState({count: newCount});
  }

  updateMessage = (msg) => {
    this.setState({message: msg})
  }

  render() {
    return (
      <div className="App">
        <MessageDisplay message={this.state.message} />
        <MessageEdit 
          updateMessage={this.updateMessage}
          message={this.state.message} />

        <CountDisplay count={this.state.count} />
        <Counter
          increment={this.incrementCount}
          decrement={this.decrementCount}
        />
      </div>
    );
  }
}

export default App;

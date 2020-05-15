import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }

  countUp = () => {
    this.setState( { counter: ++this.state.counter} )
  }
  render(){
    return(
        <div className="App">
         <button onClick={this.countUp}>add</button>
    <h1>{this.state.counter}</h1>
        </div>
    )
  }
}

export default App;

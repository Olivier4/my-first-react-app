import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
      Hello
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

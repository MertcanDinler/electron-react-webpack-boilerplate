import React, { Component } from 'react';
import react from './react.svg';
import electron from './electron.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={electron} className="App-logo-electron" alt="logo" />
          <img src={react} className="App-logo-react" alt="logo" />
          <h1 className="App-title">Welcome to Electron + React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pendu from './components/Pendu';

class App extends Component {
  render() {
    return (
      <div className="App">
      Le pendu
        <Pendu />
      </div>
    );
  }
}

export default App;

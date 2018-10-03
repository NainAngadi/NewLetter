import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home.react';
import Header from './components/header/header.react';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
          <Header />
          <Home />
      </div>     
    );
  }
}

export default App;
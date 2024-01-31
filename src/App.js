import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
      </div>
    );
  }
}

export default App;
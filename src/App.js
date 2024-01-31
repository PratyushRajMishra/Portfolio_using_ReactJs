import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
      </div>
    );
  }
}

export default App;

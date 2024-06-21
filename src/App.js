import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>  
      </div>
    );
  }
}

export default App;

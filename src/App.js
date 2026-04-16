import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contribution from './components/Contribution';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Home />
        <About />
        <Project />
        <Contribution />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />      
      
    </div>
  );
}

export default App;

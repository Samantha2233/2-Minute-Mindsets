import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header/Header'
import Featured from './components/Featured/Index'
import VenueInfo from './components/VenueInfo/Index';
import Highlights from './components/Highlights/Index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured/>
        <VenueInfo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;

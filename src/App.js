import React, { Component } from 'react';
import Header from './components/Header/Header'
import Featured from './components/Featured/Index'
import VenueInfo from './components/VenueInfo/Index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px', background: 'cornflowerblue' }}>
        <Header />
        <Featured/>
        <VenueInfo/>
      </div>
    );
  }
}

export default App;

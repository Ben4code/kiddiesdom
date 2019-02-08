import React, { Component } from 'react';
import Header from './components/Header/Header'
import Featured from './components/Featured/Index'
import VenueInfo from './components/VenueInfo/Index';
import Highlights from './components/Highlights/Index';
import Pricing from './components/Pricing/Index'
import Location from './components/Location/Index'
import Footer from './components/Header/Footer'
import './App.css';

import {Element} from 'react-scroll'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="featured">
          <Featured/>
        </Element>
        
        <Element name="venuInfo">
          <VenueInfo/>
        </Element>
        
        <Element name="highlights">
          <Highlights/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>
        <Element name="location">
          <Location/>
        </Element>

        <Footer/>
      </div>
    );
  }
}

export default App;

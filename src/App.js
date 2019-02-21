import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HotelDetailsComponent from './components/HotelDetailsComponent';
import 'react-dropdown/style.css';
import './App.css'
import './assets/css/style.css';
import bg from './assets/img/background.png';

class App extends Component {

  render() {
    return (
      <div className='App' style={{ backgroundImage: "url(" + bg + ")" }}>
        <HeaderComponent />
        <HotelDetailsComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;

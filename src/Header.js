import logo from './logo.svg';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          Nome do professor
        </h4>
        <h4>Programação Orientada a Objetos</h4>
      </header>
          );
  }
}

export default Header;
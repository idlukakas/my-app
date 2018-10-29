import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import StudentCallGrid from './StudentCallGrid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Turma A</p>
        <p>Herança</p>
        <p>{new Date().toLocaleString()}</p>
        <input></input>
        <button>Pesquisar alguma coisa</button>
        <StudentCallGrid name="William" ra="232334" />
        <button>Salvar</button>
      </div>
    );
  }
}

export default App;

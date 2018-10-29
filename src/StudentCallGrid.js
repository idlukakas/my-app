import React, { Component } from 'react';

class StudentCallGrid extends Component {
  render() {
    return (
      <table>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>RA</th>
            <th>1º Per.</th>
            <th>2º Per.</th>
            <th>3º Per.</th>
            <th>4º Per.</th>
          </tr>
          <tr>
            <td>imagem</td>
            <td>{this.props.name}</td>
            <td>{this.props.ra}</td>
            <td><input type='checkbox'></input></td>
            <td><input type='checkbox'></input></td>
            <td><input type='checkbox'></input></td>
            <td><input type='checkbox'></input></td>
          </tr>
        </table>
          );
  }
}

export default StudentCallGrid;
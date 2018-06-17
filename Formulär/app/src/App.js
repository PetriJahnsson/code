import React, { Component } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import '../node_modules/spectre.css/dist/spectre.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" id="formular">
          <h1 className="App-title">Arbetsprov för RCC Väst - Petri Jahnsson</h1>
        </header>
        <ul className="tab">
          <li className="tab-item active">
            <a href="#formular">Formulär</a>
          </li>
          <li className="tab-item">
            <a href="#anmalan" >Canceranmälan</a>
          </li>
        </ul>
        <div className="container">
          <div className="columns">
            <div className="col-md-6 col-5 centered">
              <FormContainer />
            </div>
          </div>
        </div>
        <div className="container" id="anmalan">
          <div className="columns">
            <div className="col-md-6 centered">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

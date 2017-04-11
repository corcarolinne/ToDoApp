import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  List from './components/presentional/list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To Do App</h2>
        </div>
        <div className="App-intro">
          <input type="text"/>
          <button type="button"/>
          <List>
          </List>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TaskRow from './components/presentional/taskRow';
import List from './components/presentional/list';
import logo from './logo.svg';
import './App.css';


const styles = {
  addContainer: {
    marginTop: "30px",
    addButton: {
      marginLeft: "7px"
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To Do App</h2>
        </div>
        <div style={styles.addContainer}>
          <input type="text"/>
          <button style={styles.addContainer.addButton} type="button"/>
          <List>
            <TaskRow/>
          </List>
        </div>
      </div>
    );
  }
}

export default App;

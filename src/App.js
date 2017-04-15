import React, { Component } from 'react';
import TaskRow from './components/presentional/taskRow';
import List from './components/presentional/list';
import logo from './logo.svg';
import './App.css';


const styles = {
  addContainer: {
    marginTop: "30px",
    marginBottom:"20px",
    addButton: {
      marginLeft: "7px"
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      taskList: []
    };
    this.addTaskRow = this.addTaskRow.bind(this);
  };

  buildRows() {
    return this.state.taskList.map(item => (
      <TaskRow
        task={item}
        editButtonLabel="Edit" deleteButtonLabel="Delete"
      />
    ));
  }

  addTaskRow() {
  if (this.taskInput.value) {
    this.state.taskList.push(this.taskInput.value);
    this.taskInput.value = '';
    this.setState(this.state);
  }
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To Do App</h2>
        </div>
        <div style={styles.addContainer}>
          <input type="text" ref={(input) => {this.taskInput = input}} placeholder="Type your task!"/>
          <button style={styles.addContainer.addButton} type="button" onClick={this.addTaskRow}>Add</button>
        </div>
        <List>
        {this.buildRows()}
        </List>
      </div>
    );
  }
}

export default App;

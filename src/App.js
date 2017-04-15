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
      taskList: [],
      editedRow: undefined
    };
    this.addTaskRow = this.addTaskRow.bind(this);
    this.deleteTaskRow = this.deleteTaskRow.bind(this);
    this.editTaskRow = this.editTaskRow.bind(this);
    this.saveEditRow = this.saveEditRow.bind(this);
    this.editInputRef = this.editInputRef.bind(this);
  };

  buildRows() {
    return this.state.taskList.map(item => (
      <TaskRow
        key={item.id}
        task={item.task}
        editButtonLabel="Edit" deleteButtonLabel="Delete"
        isEditing={this.state.editedRow === item.id}
        editInputRef={this.editInputRef}
        saveButtonLabel="Save"
        deleteButtonOnClick={() => { this.deleteTaskRow(item.id)}}
        editButtonOnClick={() => { this.editTaskRow(item.id)}}
        saveButtonOnClick={() => { this.saveEditRow(item.id)}}
      />
    ));
  }

  addTaskRow() {
  if (this.taskInput.value) {
    const taskObject = {
        task: this.taskInput.value,
        id: Math.random()
      };
    this.state.taskList.push(taskObject);
    this.taskInput.value = '';
    this.setState(this.state);
  }
}

  deleteTaskRow(id) {
    this.state.taskList = this.state.taskList.filter(item => item.id !== id);
    this.setState(this.state);
  }

  saveEditRow(id) {
    if (this.editInput.value) {
      this.state.taskList = this.state.taskList.map(item => {
        if (item.id === id) {
          item.task = this.editInput.value;
        }
        return item;
      });
      this.editInput.value = '';
    }
    this.state.editedRow = undefined;
    this.setState(this.state);
  }

  editTaskRow(id) {
    this.state.editedRow = id;
    this.setState(this.state);
  }

  editInputRef(input) {
    this.editInput = input;
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

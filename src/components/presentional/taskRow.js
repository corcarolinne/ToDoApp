import React, { Component } from 'react';

const styles = {
  container: {
    buttonsContainer: {
      marginLeft: "7px"
    }
  }
}

class TaskRow extends Component {
  render() {
    return (
      <div>
        task1
        <button style={styles.container.buttonsContainer} type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    );
  }
}

export default TaskRow;

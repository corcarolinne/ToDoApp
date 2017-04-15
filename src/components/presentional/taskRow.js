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
    const { task, editButtonLabel, deleteButtonLabel } = this.props;
    return (
      <div>
        {task}
        <button style={styles.container.buttonsContainer} type="button">{editButtonLabel}</button>
        <button type="button">{deleteButtonLabel}</button>
      </div>
    );
  }
}

export default TaskRow;

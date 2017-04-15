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
    const {
      task,
      editButtonLabel,
      deleteButtonLabel,
      deleteButtonOnClick,
      isEditing,
      editInputRef,
      editButtonOnClick,
      saveButtonLabel,
      saveButtonOnClick
     } = this.props;
    return (
      <div>
        {
          isEditing ?
          <input type="text" ref={editInputRef} />
          :
          task
        }

        {
          isEditing ?
          <button type="button" onClick={saveButtonOnClick}>{saveButtonLabel}</button>
          :
          <button type="button" onClick={editButtonOnClick}>{editButtonLabel}</button>
        }

        <button type="button" onClick={deleteButtonOnClick}>{deleteButtonLabel}</button>
      </div>
    );
  }
}

export default TaskRow;

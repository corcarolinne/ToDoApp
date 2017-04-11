import React, { Component } from 'react';


const styles = {
  container: {
    align: "center",
    marginTop: "25px"
  }
}

class List extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default List;

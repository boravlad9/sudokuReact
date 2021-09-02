import React from 'react';

class OneCell extends React.Component {

  render() {
    const value = this.props.value === 0 ? '-' : this.props.value;
    return (
      <div style={{border: "1px solid black", padding: "10px", display: "inline"}}>
        <p onClick={this.props.onClick} style={{display: "inline", whiteSpace: "nowrap"}} > {value} </p>
      </div>
    );
  }

}

export default OneCell;

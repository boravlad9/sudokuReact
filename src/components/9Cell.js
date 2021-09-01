import React from 'react';
import OneCell from './1Cell.js'

class NineCell extends React.Component {
  constructor(props) {
    super(props);
  }

  renderOneCell(index){
    return (
      <OneCell
        value={this.props.matrix[index]}
        onClick={(index) => this.props.onClick(index)}
      />
    );
  }
  render() {
    return (
      <div style={{display:"flex", flexDirection:"column", border: "1px solid black"}}>
        <div style={{display: "inline-flex"}}>
          {this.renderOneCell(0)}
          {this.renderOneCell(1)}
          {this.renderOneCell(2)}
        </div>
        <div style={{display: "inline-flex"}}>
          {this.renderOneCell(3)}
          {this.renderOneCell(4)}
          {this.renderOneCell(5)}
        </div>
        <div style={{display: "inline-flex"}}>
          {this.renderOneCell(6)}
          {this.renderOneCell(7)}
          {this.renderOneCell(8)}
        </div>
      </div>
    );
  }
}

export default NineCell;

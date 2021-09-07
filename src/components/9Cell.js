import React from 'react';
import OneCell from './1Cell.js'

const renderOneCell = (index, props) =>{
  return (
    <OneCell
      value={props.matrix[index]}
      onClick={() => props.onClick(index)}
    />
  );
}

function NineCell( props ){

    return (
      <div style={{display:"flex", flexDirection:"column", border: "1px solid black"}}>
        <div style={{display: "inline-flex"}}>
          {renderOneCell(0, props)}
          {renderOneCell(1, props)}
          {renderOneCell(2, props)}
        </div>
        <div style={{display: "inline-flex"}}>
          {renderOneCell(3, props)}
          {renderOneCell(4, props)}
          {renderOneCell(5, props)}
        </div>
        <div style={{display: "inline-flex"}}>
          {renderOneCell(6, props)}
          {renderOneCell(7, props)}
          {renderOneCell(8, props)}
        </div>
      </div>
    );
}

export default NineCell;

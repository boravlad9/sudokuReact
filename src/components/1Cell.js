import React from 'react';

function OneCell(props) {

  const value = props.value === 0 ? '-' : props.value;
  return (
    <div style={{border: "1px solid black", padding: "10px", display: "inline"}}>
      <p onClick={props.onClick} style={{display: "inline", whiteSpace: "nowrap"}} > {value} </p>
    </div>
  );


}

export default OneCell;

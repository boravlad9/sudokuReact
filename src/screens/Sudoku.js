import React from 'react';
import NineCell from '../components/9Cell.js'
import {generateMatrix, getCell, isFinal} from '../services/MatrixSudoku.js'

class Sudoku extends React.Component {


  constructor(props) {
    super(props);
    let solution = generateMatrix();
    let matrix = [];
    for (let index = 0; index < 9; index++){
      matrix[index] = new Array(9);
    }
    for (let indexR = 0; indexR < 9; indexR++){
      for (let indexC = 0; indexC < 9; indexC++){
          if (Math.floor(Math.random() * 3) === 0){
            matrix[indexR][indexC] = solution[indexR][indexC];
          }
          else {
            matrix[indexR][indexC] = 0;
          }
      }
    }
    this.state = {solution : solution, matrix : matrix};
    console.log(solution);
  }

  renderNineCell(index){
    return (
      <NineCell
        matrix={getCell(this.state.matrix, index)}
        onClick={(indexC) => this.handleClick(index, indexC)}
      />
    );
  }

  handleClick(indexCell, indexNr){
      console.log(indexCell);
      console.log(indexNr);
  }

  render() {
    return (
      <div style={{display:"flex"}}>
        <div>
          {this.renderNineCell(0)}
          {this.renderNineCell(3)}
          {this.renderNineCell(6)}
        </div>
        <div>
          {this.renderNineCell(1)}
          {this.renderNineCell(4)}
          {this.renderNineCell(7)}
        </div>
        <div>
          {this.renderNineCell(2)}
          {this.renderNineCell(5)}
          {this.renderNineCell(8)}
        </div>
      </div>
    );
  }
}

export default Sudoku;

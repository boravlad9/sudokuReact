import React from 'react';
import NineCell from '../components/9Cell.js'
import {generateMatrix, isFinal, getCells} from '../Services/MatrixSudoku.js'


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
    matrix = getCells(matrix);
    solution = getCells(solution);
    this.state = {solution : solution, matrix : matrix, isDone : false};
  }

  renderNineCell(index){
    return (
      <NineCell
        matrix={this.state.matrix[index]}
        onClick={(indexC) => this.handleClick(index, indexC)}
      />
    );
  }

  handleClick(indexCell, indexNr){
    let temp = this.state.matrix;
    temp[indexCell][indexNr]++;
    if (temp[indexCell][indexNr] === 10){
      temp[indexCell][indexNr] = 1;
    }
    this.setState({matrix : temp});
    this.setState({isDone : isFinal(this.state.matrix, this.state.solution)});
  }

  render() {
    const value = this.state.isDone ? "Win" : "Not win";
    return (
      <>
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
      <p>{value}</p>
      </>
    );
  }
}

export default Sudoku;


const maxRows = 9, maxColls = 9;

export const check = (matrix, maxR, maxC) =>{


      for (let index = 0; index < maxRows; index++){

        if (index < maxR && matrix[index][maxC] === matrix[maxR][maxC]){
          return false;
        }

        if (index < maxC && matrix[maxR][index] === matrix[maxR][maxC]){
          return false;
        }

      }
      return true;
}

export const checkFinal = (matrix) =>{
  for (let i = 0; i < maxRows; i++){
    for (let j = 0; j < maxColls; j++){
      if (matrix[i][j] === undefined)
        return false;
    }
  }
  return true;
}


export const recursiveCheck = (matrix, indexR, indexC) =>{
    for (let possValues = 1; possValues <= 9; possValues++){
      matrix[indexR][indexC] = possValues;

      if (check(matrix, indexR, indexC)){
        if (indexC === 8){
          if (indexR === 8){
            return;
          }
          recursiveCheck(matrix, (indexR + 1), 0);
        }
        else{
          recursiveCheck(matrix, indexR, indexC + 1);
        }
        if (checkFinal(matrix, indexR, indexC))
        {
          return ;
        }
      }


    }
    matrix[indexR][indexC] = undefined;

};

export const generateMatrix = () =>{

  let matrix = [];
  for (let index = 0; index < maxRows; index++){
    matrix[index] = new Array(maxColls);
  }
  recursiveCheck(matrix, 0, 0);
  return matrix;

};


export const getCell = (matrix, indexCellMat) =>{
  let cell =  new Array(maxColls);
  const indexR = Math.floor(indexCellMat / 3) * 3, indexC = (indexCellMat % 3) * 3;
  for (let indexCell = 0; indexCell < 9; indexCell++){
    cell[indexCell] = matrix[indexR + Math.floor(indexCell / 3)][indexC + (indexCell % 3)];
  }
  return cell;
}


export const isFinal = (matrix, matrixSol) => {
  for (let indexR = 0; indexR < maxRows; indexR++)
  {
    for (let indexC = 0; indexC < maxColls; indexC++)
    {
      if (matrix[indexR][indexC] != matrixSol[indexR][indexC])
        return false;
    }
  }
  return true;
}

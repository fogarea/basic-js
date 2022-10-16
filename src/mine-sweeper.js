const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const getCopyDimensionalArray = (array) => {
    return array.map(arrItem => {
      return Array.isArray(arrItem) && getCopyDimensionalArray(arrItem);
    })
  }
  const mineSweeperGrid = getCopyDimensionalArray(matrix);

  for (let i in matrix) {
    for (let j in matrix[0]) {
      let indexI = parseInt(i);
      let indexJ = parseInt(j);
      const step = 1;
      let minesInCellsAroundCounter = 0;
      const counter = (sign) => {
        matrix[eval(`${indexI}${sign}${step}`)][indexJ-step] ? minesInCellsAroundCounter += 1 : (
            matrix[eval(`${indexI}${sign}${step}`)][indexJ] ? minesInCellsAroundCounter += 1 : (
                matrix[eval(`${indexI}${sign}${step}`)][indexJ+step] ? minesInCellsAroundCounter += 1 : minesInCellsAroundCounter
            )
        )
      }
      indexI > 0 ? counter('-') : minesInCellsAroundCounter;
      indexI < (matrix.length - 1) ? counter('+') : minesInCellsAroundCounter;
      matrix[indexI][indexJ-step] ? minesInCellsAroundCounter += 1 : (matrix[indexI][indexJ+step] ? minesInCellsAroundCounter += 1 : minesInCellsAroundCounter);
      mineSweeperGrid[i][j] = minesInCellsAroundCounter;
    }
  }

  return mineSweeperGrid;
}

module.exports = {
  minesweeper
};

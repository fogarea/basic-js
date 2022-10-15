const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let amount = 0;

  matrix[0].forEach((el, indexI) => {
    let isEnable = true;
    matrix.forEach((el, indexJ) => {
      matrix[indexJ][indexI] !== 0 && isEnable ? amount += matrix[indexJ][indexI] : isEnable = false;
    })
  })

  return amount;
}

module.exports = {
  getMatrixElementsSum
};

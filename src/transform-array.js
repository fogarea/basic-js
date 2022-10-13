const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {


  if(!(arr instanceof Array)) throw Error('\'arr\' parameter must be an instance of the Array!');
  if(arr.length === 0) return [];
    let transformCommands = {
      '--discard-next'(acc, currentIndex, ar) {
        if(currentIndex !== ar.length - 1){
          acc.splice(currentIndex, 1);
          ar.splice(currentIndex, 1);
          ar.splice(currentIndex + 1, 1);
        } else {
          acc.pop();
        }
        return acc;
      },
      '--discard-prev'(acc, currentIndex) {
        currentIndex !== 0 ? acc.length = currentIndex - 1 : acc.shift();
        return acc;
      },
      '--double-next'(acc, currentIndex, ar) {
        currentIndex !== ar.length - 1 ? acc[currentIndex] = ar[currentIndex + 1] : acc.pop();
        return acc;
      },
      '--double-prev'(acc, currentIndex) {
        if (currentIndex !== 0) {
          acc[currentIndex] = acc[currentIndex - 1];
        } else acc.shift();
        return acc;
      }
    }

    let ar = [...arr]

    return ar.reduce((acc, currentValue, currentIndex) => {
      if(typeof currentValue === 'number'){
        acc.push(currentValue);
        return acc;
      } else {
        acc.push(currentValue);
        if(currentValue === `--discard-next` || currentValue === `--discard-prev` || currentValue === `--double-next` || currentValue === `--double-prev`){
          acc = transformCommands[currentValue](acc, currentIndex, ar);
        }
        return acc;
      }
    }, [])

}

module.exports = {
  transform
};
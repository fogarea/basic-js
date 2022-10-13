const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let numStr = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i+1] ? counter++ : (numStr = numStr + `${counter > 1 ? counter : ''}${str[i]}`, counter = 1);
  }
  return numStr;
}

module.exports = {
  encodeLine
};

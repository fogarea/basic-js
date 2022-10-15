const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} speed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, speed) {
  let ansObj = Object.create(null)
  ansObj.turns = Math.pow(2, disks) - 1;
  ansObj.seconds =  Math.floor(ansObj.turns / speed * 3600)
  return ansObj
}

module.exports = {
  calculateHanoi
};

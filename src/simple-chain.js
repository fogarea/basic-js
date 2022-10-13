const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  temp: [],
  getLength() {
    return this.temp.length;
  },
  addLink(value) {
    value !== null ? this.temp.push(value) : this.temp.push('null')
    return this;
  },
  removeLink(position) {
    if (!this.temp.hasOwnProperty(position - 1)) {
      this.temp = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.temp.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.temp.reverse();
    return this;
  },
  finishChain() {
    const temp = this.temp.reduce((acc, el) => {
      return acc += `( ${el} )~~`;
    }, '')
    this.temp = [];
    return temp.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};

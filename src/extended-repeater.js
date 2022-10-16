const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

    const hasPropLength = (str) => {
        return options.hasOwnProperty(str) ? options[str].length : 1;
    }

    const hasPropNumber = (str) => {
        return options.hasOwnProperty(str) ? options[str] : 1;
    }

    return `${str}`
            .concat(
                `${options.hasOwnProperty('addition') ? options.addition : ''}`
                    .concat(options.additionSeparator || '|')
                    .repeat(hasPropNumber('additionRepeatTimes'))
                    .slice(0, -(hasPropLength('additionSeparator')))
            )
            .concat(options.separator || '+')
            .repeat(hasPropNumber('repeatTimes'))
            .slice(0, -(hasPropLength('separator')));
}

module.exports = {
  repeater
};

const {NotImplementedError} = require('../extensions/index.js');

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
    options = {
        repeatTimes: options?.repeatTimes ?? 1,
        separator: options.separator ?? '+',
        addition: options.addition === null ? 'null' : options.addition===undefined ? '' : options.addition,
        additionRepeatTimes: options.additionRepeatTimes ?? 1,
        additionSeparator: options.additionSeparator ?? '|',
    }
    let arr = [];
    let substr;
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        arr.push(options.addition);
    }
    substr = arr.join(options.additionSeparator);
    arr = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        arr.push(str + substr);
    }
    return arr.join(options.separator);
}

module.exports = {
    repeater
};

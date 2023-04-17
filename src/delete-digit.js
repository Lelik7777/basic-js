const {NotImplementedError} = require('../extensions/index.js');
const {json} = require("mocha/lib/reporters");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arrNum = [...String(n)];
    const arr = [];
    for (let i = 0; i < arrNum.length; i++) {
        const subStr = [...arrNum];
        subStr.splice(i, 1);
        arr.push(subStr);
    }
    return Math.max(...arr.map(x => +x.join('')));
}

module.exports = {
    deleteDigit
};

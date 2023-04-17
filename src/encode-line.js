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
function encodeLine( str) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const strArr=[...str];
  const arr=[];
  let count=0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if(str[i]!==str[i+1]){
      arr.push( strArr.splice(0,count));
      count=0;
    }
  }
  return arr.map(el=>el.length>1?`${el.length}${el[0]}`:el[0]).join('');

}

module.exports = {
  encodeLine
};

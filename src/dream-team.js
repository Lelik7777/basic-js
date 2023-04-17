const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(members)) {
        return false;
    }
    return members.filter(name => typeof name === 'string').map(name => name.replace(/ /g, '')).map(name => name === ' ' ? '' : [...name.toUpperCase()].splice(0, 1).join('')).sort().join('');
}

module.exports = {
    createDreamTeam
};

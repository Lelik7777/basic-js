const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!date) return 'Unable to determine the time of year!';
    try {
        if (isNaN(date)) throw Error('Invalid date!');
        const months = ['winter', 'spring', 'summer', 'autumn'];
        const month = date.getMonth();

        if (month < 2 || month > 10){
            return months[0];
        }

        else if (month < 5 && month > 1) {
            return months[1];
        }
        else if (month < 8 && month > 4){
            return months[2];
        }
        else if (month < 11 && month > 7){
            return months[3];
        }
    } catch {
        throw new Error('Invalid date!');
    }

}

module.exports = {
    getSeason
};

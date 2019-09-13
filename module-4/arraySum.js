'use strict';
/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum(elements) {
    let sum = 0;
    if (Array.isArray(elements)) {
        elements.forEach(val =>
            sum += Number.isInteger(val) ? Number.parseInt(val) : (Array.isArray(val) ? arraySum(val) : 0)
        );
    }
    return sum;
}

module.exports = arraySum;
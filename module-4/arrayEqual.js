'use strict';
/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

function arrayEqual(first, second) {
    if (first.length != second.length) {
        console.warn(`Size is different. First: ${first.length} != Second: ${second.length}`);
        return false;
    } else {
        let equal = true;
        for (let i = 0; i < first.length; i++) {
            if (Array.isArray(first[i])) {
                if (Array.isArray(second[i])) {
                    equal = arrayEqual(first[i], second[i]);
                } else {
                    console.warn(first[i] + " != " + second[i]);
                    return false;
                }
            } else if (first[i] !== second[i]) {
                console.warn(first[i] + " != " + second[i]);
                return false;
            }
        }
        return equal;
    }
}

module.exports = arrayEqual;
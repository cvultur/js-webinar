'use strict';
/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {Array.<string>} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

function arraySorted(items, ignore) {
    ignore = ignore ? ignore + ' ' : ' ';

    let replaced = items.map(el => typeof el == 'string' ?
        el.split('')
            .filter(char => !ignore.includes(char))
            .join('')
            .toLowerCase()
        : el
    );

    let sorted = replaced.slice().sort();

    return replaced.every((val, i) => val === sorted[i]);
}

module.exports = arraySorted;
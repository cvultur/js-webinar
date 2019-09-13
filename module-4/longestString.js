'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(strings) {
    if (!Array.isArray(strings)) {
        return "";
    }
    return strings.sort()
        .sort((a, b) => (typeof a !== "string" && typeof b !== "string") ? 1 : b.length - a.length)[0];
}

module.exports = longestString;
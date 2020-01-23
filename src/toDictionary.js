import {
    ArrayDoesNotHaveRequiredPropertyError,
    RequiredArgumentNotGivenError,
    IllegalArgumentError,
} from '../shared/consts';

/**
 * Tool to parse an array of objects to a dictionary with the same data
 * ```js
 * toDictionary([{ key: 'foo', value: 'bar'}]) === { foo: 'bar' }
 * ```
 * @param {array} array array containing the information for building the dictionary
 * @param {string} key name of the key attribute
 * @param {string} value name of the value attribute
 * @throws {Error} If invalid array is provided
 */
export default function toDictionary(array, key = 'name', value = 'value') {
    // Check if required arguments are given
    if (!array) throw new RequiredArgumentNotGivenError('array');

    // Check if array is an actual array
    if (!array || typeof array !== "object" || array.length === undefined) {
        throw new IllegalArgumentError('array', 'array');
    }
    // Check if every given element in the array has both key and value property
    if (!array.every(item => item.hasOwnProperty(key) && item.hasOwnProperty(value))) {
        throw new ArrayDoesNotHaveRequiredPropertyError('array', [key, value]);
    }
    // Check if the given array is empty to reduce the work
    if (array.length === 0) {
        return {};
    }

    return array.reduce((map, next) => ({
        // return the existing object
        ...map,
        // Add the new key-value pair to the dictionary
        [next[key]]: next[value],
    }), {});
}
/**
 * Tool to parse an array of objects to a dictionary with the same data
 * ```js
 * toDictionary([{ key: 'foo', value: 'bar'}]) === { foo: 'bar' }
 * ```
 * @param {array} array array containing the information for building the dictionary
 * @param {string} key name of the key attribute
 * @param {string} value name of the value attribute
 */
export default function toDictionary(array, key = 'name', value = 'value') {
    // Check if array is an actual array
    if (typeof array === "object" && array.length !== undefined) {
        return array.reduce((map, next) => ({
            // return the existing object
            ...map,
            // Add the new key-value pair to the dictionary
            [next[key]]: next[value],
        }), {});
    }
    // Return the invalid array parameter
    return array;
}
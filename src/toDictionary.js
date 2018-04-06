export default function toDictionary(array, key = 'name', value = 'value') {
    if (!array || typeof array === "object" && array.length === undefined) {
        return array;
    }
    return array.reduce((map, next) => ({
        ...map,
        [next[key]]: next[value],
    }), {});
}
import toDictionary from '../src/toDictionary';

describe('#toDictionary()', () => {
    it ('should not crash with no parameters provided', () => {
        expect(() => toDictionary()).not.toThrowError();
    });

    it ('should not crash with invalid parameters provided', () => {
        const invalidInput = {
            foo: 'bar'
        };
        expect(() => toDictionary(invalidInput)).not.toThrowError();
    });

    it ('should parse an array to a dictionary using default names', () => {
        const input = [
            {
                name: 'foo',
                value: 'bar',
            },
            {
                name: 'family',
                value: 'testing'
            }
        ];
        const output = {
            foo: 'bar',
            family: 'testing'
        };
        expect(toDictionary(input)).toEqual(output);
    });

    it ('should parse an array to a dictionary using custom property names', () => {
        const input = [
            {
                key: 'foo',
                val: 'bar',
            },
            {
                key: 'family',
                val: 'testing'
            }
        ];
        const output = {
            foo: 'bar',
            family: 'testing'
        };
        expect(toDictionary(input, 'key', 'val')).toEqual(output);
    });
});
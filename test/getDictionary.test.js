import assert from 'assert';
import toDictionary from '../src/toDictionary';

describe('#toDictionary()', () => {
    it ('should not crash with no parameters provided', () => {
        toDictionary();
    });

    it ('should not crash with invalid parameters provided', () => {
        const invalidInput = {
            foo: 'bar'
        };
        toDictionary(invalidInput);
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
        assert.deepEqual(toDictionary(input), output);
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
        assert.deepEqual(toDictionary(input, 'key', 'val'), output);
    });
});
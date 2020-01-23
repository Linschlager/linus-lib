import toDictionary from '../src/toDictionary';
import {
  ArrayDoesNotHaveRequiredPropertyError,
  IllegalArgumentError,
  RequiredArgumentNotGivenError
} from "../shared/consts";

describe('#toDictionary()', () => {
  it ('should throw exception with no parameters provided', () => {
    expect(() => toDictionary()).toThrowError(RequiredArgumentNotGivenError);
  });

  it ('should throw exception with invalid parameters provided', () => {
    const invalidInput = {
      foo: 'bar'
    };
    expect(() => toDictionary(invalidInput)).toThrowError(IllegalArgumentError);
  });

  it ('should throw exception with incompatible array provided', () => {
    const incompatibleArray_InvalidValueProperty = [
      { key: 'foo', value: 'bar' },
      { key: 'fizz', val: 'bazz'}
    ];
    expect(() => toDictionary(incompatibleArray_InvalidValueProperty)).toThrowError(ArrayDoesNotHaveRequiredPropertyError);

    const incompatibleArray_invalidKeyProperty = [
      { key: 'fizz', value: 'bar' },
      { k: 'buzz', value: 'fizz' }
    ];
    expect(() => toDictionary(incompatibleArray_invalidKeyProperty)).toThrowError(ArrayDoesNotHaveRequiredPropertyError);
  });

  it('should work with an empty array', () => {
    expect(() => toDictionary([])).not.toThrowError();
    expect(toDictionary([])).toEqual({});
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
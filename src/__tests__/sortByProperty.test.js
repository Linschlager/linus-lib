import sortByProperty from '../src/sortByProperty';
import { IllegalArgumentError, RequiredArgumentNotGivenError } from "../shared/consts";

describe('#sortByProperty()', () => {
  it ('should not crash with no parameters provided', () => {
    expect(() => sortByProperty()).toThrowError(RequiredArgumentNotGivenError);
  });

  it ('should not crash with invalid parameters provided', () => {
    const invalidInput = {
      foo: 'bar'
    };
    expect(() => sortByProperty(invalidInput)).toThrowError(RequiredArgumentNotGivenError);
    expect(() => sortByProperty(invalidInput, [])).toThrowError(IllegalArgumentError);
  });

  it ('should correctly sort an array', () => {
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
    const output = [
      {
        name: 'family',
        value: 'testing'
      },
      {
        name: 'foo',
        value: 'bar',
      }
    ];
    expect(sortByProperty(input, ['name'])).toEqual(output);
  });

  it ('should correctly prioritize properties earlier in the given array', () => {
    const input = [
      {
        name: 'a first entry',
        value: 'bar',
        label: 'abc',
      },
      {
        name: 'family',
        value: 'value one',
        label: 'ghi',
      },
      {
        name: 'family',
        value: 'value two',
        label: 'def',
      }
    ];
    const output = [
      {
        name: 'a first entry',
        value: 'bar',
        label: 'abc',
      },
      {
        name: 'family',
        value: 'value two',
        label: 'def',
      },
      {
        name: 'family',
        value: 'value one',
        label: 'ghi',
      }
    ];
    expect(sortByProperty(input, ['name', 'label', 'value'])).toEqual(output);
  });

  it ('should invert the sorting if `asc` is false', () => {
    const input = [
      {
        name: 'foo',
        value: 'bar',
      },
      {
        name: 'family',
        value: 'testing'
      },
      {
        name: 'zebra',
        value: 'stripes'
      }
    ];
    const output = [
      {
        name: 'zebra',
        value: 'stripes'
      },
      {
        name: 'foo',
        value: 'bar',
      },
      {
        name: 'family',
        value: 'testing'
      }
    ];
    expect(sortByProperty(input, ['name'], false)).toEqual(output);
  });

  it ('should invert the sorting if `asc` is false after everything else is done', () => {
    const input = [
      {
        name: 'a first entry',
        value: 'bar',
        label: 'abc',
      },
      {
        name: 'family',
        value: 'value one',
        label: 'ghi',
      },
      {
        name: 'family',
        value: 'value two',
        label: 'def',
      }
    ];
    const output = [
      {
        name: 'family',
        value: 'value one',
        label: 'ghi',
      },
      {
        name: 'family',
        value: 'value two',
        label: 'def',
      },
      {
        name: 'a first entry',
        value: 'bar',
        label: 'abc',
      },
    ];
    expect(sortByProperty(input, ['name', 'label', 'value'], false)).toEqual(output);
  });

  it ('should be able to compare arrays as values', () => {
    const input = [
      {
        name: 'family',
        value: ['value', 'one', 'XXXX'],
      },
      {
        name: 'family',
        value: ['value', 'two'],
      },
      {
        name: 'family',
        value: ['value', 'three', 'A'],
      },
      {
        name: 'a first entry',
        value: ['foo', 'bar'],
      },
      {
        name: 'family',
        value: ['value', 'four', 'ZZZZ'],
      }
    ];
    const output = [
      {
        name: 'a first entry',
        value: ['foo', 'bar'],
      },
      {
        name: 'family',
        value: ['value', 'four', 'ZZZZ'],
      },
      {
        name: 'family',
        value: ['value', 'one', 'XXXX'],
      },
      {
        name: 'family',
        value: ['value', 'three', 'A'],
      },
      {
        name: 'family',
        value: ['value', 'two'],
      },
    ];
    expect(sortByProperty(input, ['name', 'value'])).toEqual(output);
  });
});
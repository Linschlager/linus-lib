import assert from 'assert';
import sortByProperty from '../src/sortByProperty';

describe('#sortByProperty()', () => {
  it ('should not crash with no parameters provided', () => {
    sortByProperty();
  });

  it ('should not crash with invalid parameters provided', () => {
      const invalidInput = {
          foo: 'bar'
      };
      sortByProperty(invalidInput);
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
      assert.deepEqual(sortByProperty(input, ['name']), output);
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
    assert.deepEqual(sortByProperty(input, ['name', 'label', 'value']), output);
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
    assert.deepEqual(sortByProperty(input, ['name'], false), output);
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
    assert.deepEqual(sortByProperty(input, ['name', 'label', 'value'], false), output);
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
    assert.deepEqual(sortByProperty(input, ['name', 'value']), output);
  });
});
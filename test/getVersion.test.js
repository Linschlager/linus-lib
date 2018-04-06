import assert from 'assert';
import getVersion from '../src/getVersion';

describe('#getVersion()', () => {
    const v = getVersion();
    it('should return a string', () => {
        assert(typeof v === 'string');
    });
    it('should return a valid version number', () => {
        assert(v.match(/^\d+\.\d+\.\d+/))
    })
});
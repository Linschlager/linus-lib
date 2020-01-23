import getVersion from '../src/getVersion';

describe('#getVersion()', () => {
    const v = getVersion();
    it('should return a string', () => {
        expect(typeof v).toEqual('string');
    });
    it('should return a valid version number', () => {
        expect(v).toMatch(/^\d+\.\d+\.\d+$/);
    })
});
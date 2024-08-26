import mapArray from '../index'

describe('mapArray', function () {
    it('should map array:', function () {
        const obj = {
            name: 'Giorgio',
            surname: 'Bianchi'
        };
        const result = mapArray(obj, (key, value) => key + ' ' + value);
        expect(result).toEqual(['name Giorgio', 'surname Bianchi']);
    })
})
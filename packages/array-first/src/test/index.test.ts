import arrayFirst from '../index';

describe('first', function() {
    it('should throw an error if the value passed is not an array:', function() {
      expect(() => arrayFirst([])).toThrow();
    });

    it('should throw an error if the value passed is not an array:', function() {
        expect(arrayFirst).toThrow();
      });
  
    it('should return the first element in the array:', function() {
       expect(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual('a');
       expect(arrayFirst(['b', 'b', 'c', 'd', 'e', 'f'])).toEqual('b');
    });
  
    it('should the first n elements of the array:', function() {
       expect(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual(['a', 'b', 'c']);
    });
  });
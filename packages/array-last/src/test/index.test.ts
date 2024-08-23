import arrayLast from '../index';

describe('first', function() {
    it('should throw an error if the value passed is not an array:', function() {
      expect(() => arrayLast([])).toThrow();
    });

    it('should throw an error if the value passed is not an array:', function() {
        expect(arrayLast).toThrow();
      });
  
    it('should return the first element in the array:', function() {
       expect(arrayLast(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual('f');
       expect(arrayLast(['b', 'b', 'c', 'd', 'e', 'e'])).toEqual('e');
    });
  
    it('should the first n elements of the array:', function() {
       expect(arrayLast(['a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual(['d', 'e', 'f']);
    });

    it('should the first n elements of the array:', function() {
        expect(() => arrayLast(['a', 'b'], 3)).toThrow();
     });
  });
import mirrarray from "../index";

describe("mirrarray", function () {
  
    it('Returns empty object for empty array input', () => {
      expect(mirrarray([])).toEqual({});
    });
    
    it('Returns key mirror object as expected for an array of strings', () => {
      const input = ['this', 'that', 'another', 'again'];
      const output = {
        this: 'this',
        that: 'that',
        another: 'another',
        again: 'again',
      };
      expect(mirrarray(input)).toEqual(output);
    });
    
    it('Returns key mirror object as expected for an array of numbers', () => {
      const input = [1, 2, 3, 4];
      const output = {
        // Writing keys explicitly as strings to emphasize that the keys will have been (necessarily) coerced into strings,
        // while the values will remain numbers.
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
      };
      expect(mirrarray(input)).toEqual(output);
    });
    
    it('Throws error if input type is not Array', () => {
      const invalidInputs = [{}, 'a_string', 1234, true, undefined, null];
      expect(() => mirrarray(invalidInputs)).toThrow();
    });
    
    const validInputs = ['a', 'b', 'c'];
    
    it('Throws error if input array contains element of a type that cannot be (intuitively) coerced into a string', () => {
       const invalidInputs = [{}, [[]]]
       expect(() => mirrarray(invalidInputs)).toThrow();
    });
    
    it('Will coerce null, undefined & booleans to strings for use as keys', () => {
      [null, undefined, false, true].forEach((val: any) => {
        expect(mirrarray(validInputs.concat(val))).toEqual({
          a: 'a',
          b: 'b',
          c: 'c',
          [val]: val,
        });
      });
    });
    
    it('Will allow for multiples of the same key as long as they\'re the same type', () => {
      expect(mirrarray(['a', 'a', 'a'])).toEqual({a: 'a'});
      expect(mirrarray([1, 1, 1])).toEqual({1: 1});
    });
  
  ;
});

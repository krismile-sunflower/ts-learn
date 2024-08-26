import diff from "../index";

describe('diff', function() {
  it('should diff array:', function() {
    expect(diff(['a', 'b', 'c'], ['b', 'c', 'e'])).toEqual(['a']);
    expect(diff(['x', 'b', 'c', 'e', 'y'], ['b', 'x', 'e'])).toEqual( ['c', 'y']);
    expect(diff(['x', 'x'], ['a', 'b', 'c'])).toEqual(['x', 'x']);
    expect(diff(['x'], ['a', 'b', 'c'])).toEqual(['x']);
    expect(diff(['x', 'b', 'b', 'b', 'c', 'e', 'y'], ['x', 'e'])).toEqual(['b', 'b', 'b', 'c', 'y']);
  });

  it('should remove all occurrences of an element:', function() {
    expect(diff(['a', 'b', 'b', 'b', 'b'], ['b'])).toEqual(['a']);
  });

  it('should not modify the input array:', function() {
    var arr = ['x', 'b', 'b', 'b', 'c', 'e', 'y'];
    var init = arr.slice();
    diff(arr, ['x', 'e']);
    expect(arr).toEqual(init);
  });

  it('should diff elements from multiple arrays:', function() {
    expect(diff(['a', 'b', 'c'], ['a'], ['b'])).toEqual(['c']);
  });

  it('should return an empty array if no unique elements are in the first array:', function() {
    expect(diff(['a'], ['a', 'b', 'c'])).toEqual([]);
  });

  it('should return the first array if the second array is empty:', function() {
    expect(diff(['a', 'b', 'c'], [])).toEqual(['a', 'b', 'c']);
  });

  it('should return the first array if no other args are passed:', function() {
    expect(diff(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should iterate over sparse arguments:', function() {
    expect(diff(['a', 'b', 'c'], null, ['a', 'b'])).toEqual( ['c']);
  });
});

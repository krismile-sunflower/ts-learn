import swapArray from "../index";

describe('swapArray', () => {
  it('swaps two array-items by its index-address', () => {
    const PrimArray = ['a','b','c'];
    expect(swapArray(PrimArray, 0, 2)).toEqual(['c','b','a']);
  });

  it('doesnt change the state of the passed array, it just returns a new state', () => {
    const PrimArray = ['a','b','c'];
    swapArray(PrimArray, 0, 2);
    expect(PrimArray).toEqual(['a','b','c']);
  })

  it('responds to empty arrays', () => {
    expect(swapArray([], 0, 0)).toEqual([]);
  });

  it('swaps arrays with objects as items', () => {
    const PrimArray = [{
      id: 1,
      title: 'first'
    }, {
      id: 2,
      title: 'second'
    }];

    expect(swapArray(PrimArray, 0, 1)).toEqual([{
      id: 2,
      title: 'second'
    }, {
      id: 1,
      title: 'first'
    }]);
  });

  it('doesnt change anything is caller and target is the same', () => {
    const PrimArray = ['a','b','c'];
    expect(swapArray(PrimArray, 1, 1)).toEqual(['a','b','c']);
    expect(swapArray(PrimArray, 0, 0)).toEqual(['a','b','c']);    
  })
});
import isSorted from '../index'

test('isSorted default ', () => {
    const nums: number[] = [1, 2, 3, 4, 5];
    expect(isSorted(nums)).toBe(true);
});

test('isSorted reverse ', () => {
    const nums: number[] = [5, 4, 3, 2, 1];
    expect(isSorted(nums)).toBe(false);
});


test('isSorted custom ', () => {
    const nums: number[] = [5, 4, 3, 2, 1];
    const compare = (a: number, b: number) => b - a;
    expect(isSorted(nums, compare)).toBe(true);
});
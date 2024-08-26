import removeArray from "../index";

describe("removeArray", function () {
  it("should remove element from array:", function () {
    expect(removeArray([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);

    expect(removeArray([1, 2, 3, 4, 5], 0)).toEqual([2, 3, 4, 5]);

    expect(removeArray([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);

    expect(removeArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);

    expect(removeArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5]);
  });
});

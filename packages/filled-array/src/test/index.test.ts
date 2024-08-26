import filledArray from "../index";

function indexPlus(index: number) {
  return index + 1;
}

function fizzBuzz(index: number) {
  return (++index % 3 ? "" : "Fizz") + (index % 5 ? "" : "Buzz") || index;
}

function comprehensive(index: number, length: number, partial: number[]) {
  return partial.includes(index) ? length : index + 1;
}

describe("filled", () => {
  it("should fill an array with a value", () => {
    expect(filledArray("a", 0)).toEqual([]);
  });
  it("should fill an array with a value ['a']", () => {
    expect(filledArray("a", 1)).toEqual(["a"]);
  });
  it("should fill an array with a value ['a', 'a']", () => {
    expect(filledArray("a", 2)).toEqual(["a", "a"]);
  });
  it("should fill an array with a value ['a', 'a', 'a', 'a', 'a']", () => {
    expect(filledArray("a", 5)).toEqual(["a", "a", "a", "a", "a"]);
  });
  it("should fill an array with a value ['foo', 'foo']", () => {
    expect(filledArray("foo", 2)).toEqual(["foo", "foo"]);
  });
  it("should fill an array with a value [0, 0]", () => {
    expect(filledArray(0, 2)).toEqual([0, 0]);
  });
  it("should fill an array with a value [1, 2, 3, 4, 5]", () => {
    expect(filledArray(indexPlus, 5)).toEqual([1, 2, 3, 4, 5]);
  });
  it("should fill an array ok", () => {
    expect(filledArray(fizzBuzz, 15)).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ]);
  });
});

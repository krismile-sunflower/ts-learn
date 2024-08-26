import arrayRange from "../index";

describe("first", function () {
  it("should gerenate array - [1, 2, 3, 4, 5]", () => {
    let arrayRanged = arrayRange(1, 6);
    expect(arrayRanged).toEqual([1, 2, 3, 4, 5]);
  });

  it("should gerenate array - [0, 1, 2, 3, 4, 5]", () => {
    let arrayRanged = arrayRange(6);
    expect(arrayRanged).toEqual([0, 1, 2, 3, 4, 5]);
  });

    it("should gerenate empty array", () => {
        let arrayRanged = arrayRange();
        expect(arrayRanged).toEqual([]);
    });

    it("should gerenate empty array", () => {
        let arrayRanged = arrayRange(0);
        expect(arrayRanged).toEqual([]);
    });

    it("should gerenate empty array", () => {
        let arrayRanged = arrayRange(0, 0);
        expect(arrayRanged).toEqual([]);
    });

    it("should gerenate array - [0]", () => {
        let arrayRanged = arrayRange(0, 1);
        expect(arrayRanged).toEqual([0]);
    });

    it("should gerenate array - [0, 1, 4, 9, 16]", () => {
        let arrayRanged = arrayRange(5).map((item) => item * item);
        expect(arrayRanged).toEqual([0, 1, 4, 9, 16]);
    });
});

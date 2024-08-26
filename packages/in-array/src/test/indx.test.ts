import inArray from "../index";

describe("inArray:", function () {
    it("should return true if the value exists in the array.", function () {
        expect(inArray(["a", "b", "c", "c"], "a"));
    });

    it("should return true if the value exists in the array.", function () {
        expect(!inArray(["a", "b", "c", "c"], "d"));
    });

    it("should'nt blow up on empty arrays", function () {
        expect(!inArray([], "d"));
    });
});

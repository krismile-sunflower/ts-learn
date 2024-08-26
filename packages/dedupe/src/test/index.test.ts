import dedpue from "../index";

describe("first", function () {
   it('should remove duplicates', () => {
      let dedpued = dedpue([1, 1, 2, 3, 4, 5, 6])

      expect(dedpued).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should remove multiple duplicates', () => {
      let dedpued = dedpue([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6])

      expect(dedpued).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should remove multiple duplicates of multiple values', () => {
      let deduepd = dedpue([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 1, 1, 1, 1])

      expect(deduepd).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should remove duplicates of complex values', () => {
      let dedpued = dedpue([{a: 1}, {a: 2}, {a: 3}, {a: 3}])

      expect(dedpued).toEqual([{a: 1}, {a: 2}, {a: 3}])
  })

  it('should remove duplicates of complex values when using a custom hasher', () => {
      let dedpued = dedpue([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}, {a: 3, b: 4}], value => value.a.toString())

      expect(dedpued).toEqual([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}])
  })

  it('should remove date duplicates', () => {
      let myDate = new Date(2017, 0, 1)
      let dedpued = dedpue([myDate, myDate, myDate])

      expect(dedpued).toEqual([myDate])
  })

  it('should remove date duplicates inside a complex object', () => {
      let myDate = new Date(2017, 0, 1)
      let dedpued = dedpue([{date: myDate}, {date: myDate}, {date: myDate}])

      expect(dedpued).toEqual([{date: myDate}])
  })

});

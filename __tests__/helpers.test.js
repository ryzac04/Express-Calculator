const { calculateMean, calculateMedian, calculateMode } = require("../helpers")

describe("calculateMean", () => {
    it("calculates mean value of array of numbers", () => {
        expect(calculateMean([1,2,3,4,5])).toEqual(3)
    })
    it("returns 0 if there are no numbers in the array", () => {
        expect(calculateMean([])).toEqual(0)
    })
})

describe("calculateMedian", () => {
    it("finds median number of an odd set", () => {
        expect(calculateMedian([1,2,3,4,5])).toEqual(3)
    })
    it("finds median number of an even set", () => {
        expect(calculateMedian([1,2,3,4,5,6])).toEqual(3.5)
    })
})

describe("calculateMode", () => {
    it("finds mode of an array", () => {
        expect(calculateMode([1,1,1,1,2,2,2,3,3,3,4,4,4,4,4])).toEqual(4)
    })
})
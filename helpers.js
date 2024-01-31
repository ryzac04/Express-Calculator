// frequency counter using reduce()
function frequencyCounter(arr) {
    return arr.reduce(function (acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {})
}

// converts array of strings to an array of numbers
function numsArray(numString) {
    let result = [];

    for (let i = 0; i < numString.length; i++){
        let newNums = Number(numString[i]);
        if (Number.isNaN(newNums)) {
            return new Error(
                `${numString[i]} is not a valid number.`
            );
        }
        result.push(newNums);
    }
    return result;
}

function calculateMean(nums) {
    if (nums.length === 0) return 0;
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}

function calculateMedian(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const midIndex = Math.floor(sortedNums.length / 2);
    let median;

    if (sortedNums.length % 2 === 0) {
        median = (sortedNums[midIndex] + sortedNums[midIndex -1]) / 2;
    } else {
        median = sortedNums[midIndex];
    }
    return median
}

function calculateMode(nums) {
    let freqCounter = frequencyCounter(nums);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }
    return +mostFrequent;
}

module.exports = {
    frequencyCounter,
    numsArray,
    calculateMean,
    calculateMedian,
    calculateMode
}
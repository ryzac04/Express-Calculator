const express = require('express')
const app = express();

const {
    numsArray,
    calculateMean,
    calculateMedian,
    calculateMode} = require('./helpers')
const ExpressError = require('./expressError')


app.use(express.json());

app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError("Please provide a list of numbers separated by commas in the query string", 400)
        }
        let numString = req.query.nums.split(',');
        let nums = numsArray(numString);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        let result = {
            operation: 'mean',
            result: calculateMean(nums)
        };
        return res.json(result);
    } catch (err) {
        next(err);
    }
})

app.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError("Please provide a list of numbers separated by commas in the query string", 400)
        }
        let numString = req.query.nums.split(',');
        let nums = numsArray(numString);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        let result = {
            operation: 'median',
            result: calculateMedian(nums)
        };
        return res.send(result);
    } catch (err) {
        next(err);
    }
    
})

app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError("Please provide a list of numbers separated by commas in the query string", 400)
        }
        let numString = req.query.nums.split(',');
        let nums = numsArray(numString);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        let result = {
            operation: 'mode',
            result: calculateMode(nums)
        };
        return res.send(result);
    } catch (err) {
        next(err);
    }
})

// 404 Page: 
app.use((req, res, next) => {
    const err = new ExpressError("Page Not Found", 404)
    next(err)
})

// Error Handler:
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
    let message = err.msg;
    console.log(err.status);
    console.log(err.msg);

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status }
  });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

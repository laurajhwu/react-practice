const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { number } = req.query;
    //check if input number is a positive integer
    const isPositiveInt = !isNaN(number) && number % 1 === 0 && number >= 0;
    let result = 0;
    let error = '';

    //check if user input is an integer
    if (isPositiveInt) {
        for (let i = 0; i <= number; i++) {
            result += i;
        }
    } else {
        //handle error
        if (isNaN(number)) {
            error = `'${number}' is not an integer`
        } else if (number < 0) {
            error = `Your number should be positive`
        }
        else if (number % 1 !== 0) {
            error = `Your number should be a whole number`
        }
    }
    //store all data inside a data object
    const data = { number, isPositiveInt, result, error };
    //render data page
    res.render('data', data);
})

module.exports = router;
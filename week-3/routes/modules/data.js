const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { number } = req.query;
    //check if input number is an integer greater than 0
    const isInteger = !isNaN(number) && number % 1 === 0 && number > 0;
    let result = '';
    let error = '';

    //check if user input is an integer
    if (isInteger) {
        for (let i = 1; i <= number; i++) {
            if (i === 1) {
                result += i;
            } else {
                result += `+${i}`;
                //change line for every 30th number
                if (i % 30 === 0) {
                    result += '\n';
                }
            }
        }
    } else {
        //handle error
        if (isNaN(number)) {
            error = `'${number}' is not an integer`
        } else if (number <= 0) {
            error = 'Your number should be greater than 0'
        } else if (number % 1 !== 0) {
            error = `Your number should be a whole number`
        }
    }
    //store all data inside a data object
    const data = { number, isInteger, result, error };
    //render data page
    res.render('data', data);
})

module.exports = router;
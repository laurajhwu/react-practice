// A function that returns the maximum number of a number array
function max(numbers) {
    //assign the first number of the array to be the maxNum
    let maxNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        //compare each number in the array with the maxNum
        if (maxNum < numbers[i]) {
            /* if a number is greater than the maxNum
             then replace maxNum with current greater number*/
            maxNum = numbers[i];
        }
    }
    return maxNum;
}

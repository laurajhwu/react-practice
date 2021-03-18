/* A function that returns the sum of two numbers 
with a delay to a callback function */
function delayedResult(n1, n2, delayTime, callback) {
    //get the sum of n1 and n2
    const sum = n1 + n2;
    //execute callback with the sum as the argument after delayTime
    setTimeout(() => callback(sum), delayTime);
}

//test delayedResult
delayedResult(4, 5, 3000, function (result) {
    console.log(result);
});

delayedResult(-5, 10, 2000, function (result) {
    window.alert(result);
});
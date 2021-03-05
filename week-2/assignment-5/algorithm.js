//A function that returns an array of indices of two numbers that sum up to the target
function twoSum(nums, target) {
    let indices;
    nums.forEach(num => {
        //exclude numbers greater than the target
        if (num <= target) {
            /* loop nums again to compare if two numbers sum up to the target
            the second loop should start from the next number of the current num */
            let currentNumIndex = nums.indexOf(num);
            for (let i = currentNumIndex + 1; i < nums.length; i++) {
                if (target - num === nums[i]) {
                    return indices = [currentNumIndex, i];
                }
            }
        }
    })
    return indices;
}

console.log(twoSum([2, 5, 11, 10, 7], 13));
// complexity: O(n^2)

function twoSum(nums: number[], target: number): number[] {
    let currIndex = 0;
    while (currIndex < nums.length) {
        for (let numsIndex = 0; numsIndex < nums.length; numsIndex++) {
            if (numsIndex !== currIndex) {
                if  (nums[numsIndex] + nums[currIndex] === target) {
                    return [numsIndex, currIndex].sort();
                }
            }

            if (numsIndex === nums.length - 1) {
                currIndex++;
            }
        }
    }
};

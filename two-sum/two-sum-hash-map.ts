// complexity: O(n) time, O(n) space
// This solution uses a hash map to store the indices of the numbers, allowing for O(n) time complexity.
// The space complexity is also O(n) due to the hash map.

function twoSum(nums: number[], target: number): number[] {
    const numToIndex: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numToIndex.has(nums[i])) {
            return [numToIndex.get(nums[i])!, i].sort((a, b) => a - b);
        }
        numToIndex.set(target - nums[i], i);
    }
    throw new Error("No two sum solution");
}
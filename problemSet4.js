//Q: PW2.01.01 Two Sum 

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// function twoSum(nums, target) {
//   const numIndices = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (numIndices.has(complement)) {
//       return [numIndices.get(complement), i];
//     }

//     numIndices.set(nums[i], i);
//   }

//   return [];
// }

// const nums1 = [2, 7, 11, 15];
// const target1 = 9;
// console.log(twoSum(nums1, target1));

// const nums2 = [3, 2, 4];
// const target2 = 6;
// console.log(twoSum(nums2, target2));

// const nums3 = [3, 3];
// const target3 = 6;
// console.log(twoSum(nums3, target3));

// PW2.01.02 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// function threeSum(nums) {
//     const result = [];

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length - 2; i++) {

//         if (i > 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];

//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);

//                 while (left < right && nums[left] === nums[left + 1]) {
//                     left++;
//                 }
//                 while (left < right && nums[right] === nums[right - 1]) {
//                     right--;
//                 }

//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }

// const nums1 = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums1));

// const nums2 = [0, 1, 1];
// console.log(threeSum(nums2));

// const nums3 = [0, 0, 0];
// console.log(threeSum(nums3));

// PW2.01.03 Remove Duplicates From Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...];
// int[] expectedNums = [...];

// int k = removeDuplicates(nums);

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// function removeDuplicates(nums) {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let uniqueCount = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[uniqueCount] = nums[i];
//       uniqueCount++;
//     }
//   }

//   return uniqueCount;
// }

// const nums1 = [1, 1, 2];
// const k1 = removeDuplicates(nums1);
// console.log(k1);

// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const k2 = removeDuplicates(nums2);
// console.log(k2);

// PW2.01.04 Next Permutation
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// function nextPermutation(nums) {

//     let i = nums.length - 2;
//     while (i >= 0 && nums[i] >= nums[i + 1]) {
//         i--;
//     }

//     if (i >= 0) {
//         let j = nums.length - 1;
//         while (j >= 0 && nums[j] <= nums[i]) {
//             j--;
//         }
//         swap(nums, i, j);
//     }

//     reverse(nums, i + 1);

//     return nums;
// }

// function swap(nums, i, j) {
//     const temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

// function reverse(nums, start) {
//     let i = start;
//     let j = nums.length - 1;
//     while (i < j) {
//         swap(nums, i, j);
//         i++;
//         j--;
//     }
// }

// const nums1 = [1, 2, 3];
// console.log(nextPermutation(nums1));

// const nums2 = [3, 2, 1];
// console.log(nextPermutation(nums2));

// const nums3 = [1, 1, 5];
// console.log(nextPermutation(nums3));

// Const arr  = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9,  13];

// How to remove duplicate elements from this array?

// How to find out the largest/lowest elements from this array?

// How to slice(22, 48) from this array

const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

const uniqueArr = [...new Set(arr)];

console.log(uniqueArr);

//Problem1: Const arr  = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9,  13];



//Problem1a: How to remove duplicate elements from this array?
// const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

// const uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);




//Problem1b: How to find out the largest/lowest elements from this array?
// const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

// const maxElement = Math.max(...arr);
// const minElement = Math.min(...arr);

// console.log("Largest Element:", maxElement);
// console.log("Lowest Element:", minElement);



//Problem1c: How to slice(22, 48) from this array
// const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];


// const startIndex = arr.indexOf(22);
// const endIndex = arr.indexOf(48) + 1; // Adding 1 to include the element at endIndex


// const subArray = arr.slice(startIndex, endIndex);

// console.log(subArray);

// Problem 4: তোমাকে একটি ইন্টিজার ভ্যেলু ইনপুট নিতে হবে এবং বলতে হবে এটি ধনাত্মক(positive) নাকি ঋণাত্মক(negative) নাকি শূণ্য(zero)।
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter an integer: ", function (userInput) {

  let number = parseInt(userInput);

  
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid integer.");
  } else {
   
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }

  
  rl.close();
});


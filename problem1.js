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

// Problem 2:তোমাকে দুইটি ইন্টিজার ভ্যেলু ইনপুট নিতে হবে এবং তাদের যোগফল, বিয়োগফল, গুণফল এবং ভাগফল নীচে দেখানো ফরম্যাট এ দেখাতে হবে।

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the first integer: ", function (input1) {
//   rl.question("Enter the second integer: ", function (input2) {

//     let num1 = parseInt(input1);
//     let num2 = parseInt(input2);

//     if (isNaN(num1) || isNaN(num2)) {
//       console.log("Invalid input. Please enter valid integers.");
//     } else {

//       let sum = num1 + num2;
//       let difference = num1 - num2;
//       let product = num1 * num2;

//       let quotient = num2 !== 0 ? num1 / num2 : "Undefined (division by zero)";

//       console.log(`Sum: ${sum}`);
//       console.log(`Difference: ${difference}`);
//       console.log(`Product: ${product}`);
//       console.log(`Quotient: ${quotient}`);
//     }

//     rl.close();
//   });
// });

//Problem3: তোমাকে একটি অঋণাত্মক (০ বা এর থেকে বড়) সংখ্যা নিতে হবে এবং বলতে হবে সংখ্যাটি জোড়(even) নাকি বিজোড়(odd)।

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a non-negative number: ", function (userInput) {

//   let number = parseFloat(userInput);

//   if (isNaN(number) || number < 0) {
//     console.log("Invalid input. Please enter a valid non-negative number.");
//   } else {

//     if (number % 2 === 0) {
//       console.log("The number is even.");
//     } else {
//       console.log("The number is odd.");
//     }
//   }

//   rl.close();
// });

// Problem 4: তোমাকে একটি ইন্টিজার ভ্যেলু ইনপুট নিতে হবে এবং বলতে হবে এটি ধনাত্মক(positive) নাকি ঋণাত্মক(negative) নাকি শূণ্য(zero)।

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter an integer: ", function (userInput) {

//   let number = parseInt(userInput);

//   if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid integer.");
//   } else {

//     if (number > 0) {
//       console.log("The number is positive.");
//     } else if (number < 0) {
//       console.log("The number is negative.");
//     } else {
//       console.log("The number is zero.");
//     }
//   }

//   rl.close();
// });

// Problem 5: ধরো তোমার এক বন্ধু তোমাকে বলেছে সে একটি Gucci Bag কিনবে যদি তার কাছে ১০ হাজার টাকা বা এর বেশি থাকে। নাহলে যদি তার কাছে ৫ হাজার বা এর বেশি টাকা থাকে তাহলে সে Levis Bag কিনবে। আর নাহলে সে নিউ মার্কেট থেকে কিছু (Something) কিনে নিবে। সে তোমাকে আরও বললো যে, যদি সে Gucci Bag কিনতে পারে এবং তার কাছে যদি ২০ হাজার টাকা এর বেশি থাকে তাহলে সে আরও একটি Gucci Belt কিনবে।
// এখন ধরো তুমি জানো তোমার বন্ধুর কাছে কত টাকা আছে, তুমি কি বলতে পারবে সে কোন কোন জিনিস গুলো কিনবে?

// function whatToBuy(amount) {
//   if (amount >= 10000) {
//     return "Gucci Bag";
//   } else if (amount >= 5000) {
//     return "Levis Bag";
//   } else {
//     return "Something from New Market";
//   }
// }

// function additionalPurchase(amount, currentPurchase) {
//   if (currentPurchase === "Gucci Bag" && amount > 20000) {
//     return "Gucci Belt";
//   }
//   return "";
// }

// const friendMoney = 6500;
// const purchase = whatToBuy(friendMoney);
// const additionalItem = additionalPurchase(friendMoney, purchase);

// console.log("Friend will buy:", purchase);
// if (additionalItem) {
//   console.log("Friend will also buy:", additionalItem);
// }

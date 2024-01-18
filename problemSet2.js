//Problem1: Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// const people = [
//   { name: 'John', age: 25, gender: 'male' },
//   { name: 'Jane', age: 30, gender: 'female' },
//   { name: 'Mike', age: 22, gender: 'male' },
//   { name: 'Emily', age: 28, gender: 'female' },
//   { name: 'David', age: 35, gender: 'male' }
// ];

// const filterAndMapNames = (peopleArray) => {

//   const males = peopleArray.filter(person => person.gender === 'male');

//   const names = males.map(person => person.name);

//   return names;
// };

// const result = filterAndMapNames(people);
// console.log(result);

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

// const books = [
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//   { title: '1984', author: 'George Orwell', year: 1949 },
//   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
//   { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', year: 1997 }
// ];

// const extractBookTitles = (booksArray) => {
//   return booksArray.map(book => book.title);
// };

// const bookTitles = extractBookTitles(books);
// console.log(bookTitles);

// Problem 3: Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// const square = (num) => {
//   return num * num;
// };

// const double = (num) => {
//   return num * 2;
// };

// const add5 = (num) => {
//   return num + 5;
// };

// const squareDoubleAndAdd5 = (num) => {
//   return add5(double(square(num)));
// };

// const originalNumber = 3;
// const result = squareDoubleAndAdd5(originalNumber);
// console.log(result);

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2019 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2018 },
  { make: "Chevrolet", model: "Malibu", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
];

const sortByYearAscending = (carsArray) => {
  return carsArray.sort((car1, car2) => car1.year - car2.year);
};

const sortedCars = sortByYearAscending(cars);
console.log(sortedCars);

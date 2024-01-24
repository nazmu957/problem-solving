// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

// const customers = [
//   { name: 'Customer1', purchases: 3, loyaltyPoints: 100 },
//   { name: 'Customer2', purchases: 8, loyaltyPoints: 150 },
//   { name: 'Customer3', purchases: 6, loyaltyPoints: 120 },

// ];

// function doubleLoyaltyPoints(customersArray) {
//   return customersArray.map(customer => {
//     if (customer.purchases > 5) {
      
//       return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
//     } else {
      
//       return customer;
//     }
//   });
// }


// const updatedCustomers = doubleLoyaltyPoints(customers);
// console.log(updatedCustomers);

// Task: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

// function memoize(func) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache[key]) {
//       console.log("Result fetched from cache for", args);
//       return cache[key];
//     }

//     const result = func.apply(this, args);
//     cache[key] = result;

//     console.log("Result calculated and cached for", args);
//     return result;
//   };
// }


// function expensiveFunction(x, y) {
  
//   console.log("Computing result for", x, y);
//   return x + y;
// }


// const memoizedExpensiveFunction = memoize(expensiveFunction);


// console.log(memoizedExpensiveFunction(2, 3));  
// console.log(memoizedExpensiveFunction(2, 3));  
// console.log(memoizedExpensiveFunction(4, 5));  
// console.log(memoizedExpensiveFunction(4, 5));  

// Task: Object Sorting with Multiple Criteria
// Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category.


// const products = [
//   { name: 'Product1', price: 50, category: 'Electronics' },
//   { name: 'Product2', price: 30, category: 'Clothing' },
//   { name: 'Product3', price: 40, category: 'Electronics' },
//   { name: 'Product4', price: 25, category: 'Clothing' },
//   { name: 'Product5', price: 60, category: 'Electronics' },
 
// ];

// function sortProducts(productsArray) {
//   return productsArray.sort((a, b) => {
   
//     if (a.category < b.category) return -1;
//     if (a.category > b.category) return 1;

   
//     return b.price - a.price;
//   });
// }

// const sortedProducts = sortProducts(products);
// console.log(sortedProducts);

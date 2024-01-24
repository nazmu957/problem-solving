// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

const customers = [
  { name: 'Customer1', purchases: 3, loyaltyPoints: 100 },
  { name: 'Customer2', purchases: 8, loyaltyPoints: 150 },
  { name: 'Customer3', purchases: 6, loyaltyPoints: 120 },

];

function doubleLoyaltyPoints(customersArray) {
  return customersArray.map(customer => {
    if (customer.purchases > 5) {
      
      return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
    } else {
      
      return customer;
    }
  });
}


const updatedCustomers = doubleLoyaltyPoints(customers);
console.log(updatedCustomers);

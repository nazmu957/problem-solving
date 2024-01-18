// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.


const people = [
  { name: 'John', age: 25, gender: 'male' },
  { name: 'Jane', age: 30, gender: 'female' },
  { name: 'Mike', age: 22, gender: 'male' },
  { name: 'Emily', age: 28, gender: 'female' },
  { name: 'David', age: 35, gender: 'male' }
];

const filterAndMapNames = (peopleArray) => {
 
  const males = peopleArray.filter(person => person.gender === 'male');

 
  const names = males.map(person => person.name);

  return names;
};


const result = filterAndMapNames(people);
console.log(result);

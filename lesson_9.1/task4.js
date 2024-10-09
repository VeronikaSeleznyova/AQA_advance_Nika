const person = {
  firstName: 'Nika',
  lastName: 'Hilebrand',
  age: 25,
};

person.email = 'test@gmail.com';
delete person.age;
console.log(person);

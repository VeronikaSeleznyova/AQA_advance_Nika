const users = [
  { name: 'Anna', age: 20, email: 'test@gmail.com' },
  { name: 'Jhon', age: 22, email: 'test1@gmail.com' },
  { name: 'Mark', age: 24, email: 'test2@gmail.com' },
];

for (const { name, age, email } of users) {
  console.log(`${name} ${email}, Age: ${age}`);
}

const number = 7;

console.log(`Таблиця множення для числа ${number} (за допомогою циклу for):`);

for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

console.log(`\nТаблиця множення для числа ${number} (за допомогою циклу while):`);

let j = 1;
while (j <= 10) {
  console.log(`${number} * ${j} = ${number * j}`);
  j++;
}
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedArray = [...numbersList];

const sortedArray = copiedArray.sort((a, b) => a - b);

console.log('Вихідний масив:', numbersList);
console.log('Відсортований масив:', sortedArray);
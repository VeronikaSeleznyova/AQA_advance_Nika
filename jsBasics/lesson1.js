//Завдання 1: Оголошення змінних для примітивних типів
var myString = "JavaScript";
console.log("string:", myString);

var myNumber = 1;
console.log("number:", myNumber);

var myBoolean = true;
console.log("boolean", myBoolean);

var myNull = null;
console.log("null:", myNull);

var myUndefined;
console.log("undefined:", myUndefined);

//Завдання 2: Конкатенація радків та шаблонний рядок
let firstName = 'Nika';
let secondName = 'Anna';
let togetherNames = 'Hello ' + firstName + ' and ' + secondName + ' have a good day!';
console.log(togetherNames);

let useTemplate = `Hello ${firstName} and ${secondName} have a good day!`;
console.log(useTemplate);

//Завдання 3: Числа та булі
let myAge = 23;
let isAdult = myAge >= 18;

console.log("age:", myAge);     
console.log("Чи повнолітній:", isAdult); 

//Завдання 4: Обчислення площі та об'єму

//4.1
let radius = 5;

let circleArea = Math.PI * Math.pow(radius, 2);
circleArea = circleArea.toFixed(2);

console.log(circleArea);

//4.2
let length = 10;
let width = 4;

let rectangleArea = length * width;
rectangleArea = rectangleArea.toFixed(2);


console.log(rectangleArea);

//4.3
let radiusCylinder = 3;
let height = 7;

let cylinderVolume = Math.PI * Math.pow(radiusCylinder, 2) * height;
cylinderVolume = cylinderVolume.toFixed(2);

console.log(cylinderVolume); 
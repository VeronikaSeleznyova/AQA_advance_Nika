// function declaration
function calculateDeclaration(width, height) {
    return width * height;
  }
  
  console.log(calculateDeclaration(7, 14));  


  // function expression
const calculateExpression = function (width, height) {
    return width * height;
}

console.log(calculateExpression(7, 14));  


  // Arrow function 
const calculateArrow = (width, height) => width * height;

console.log(calculateArrow(7, 14));
const numbersArray = [10, 20, 30, 40, 50]
const sum = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  
  console.log(sum);
function handleNum(number, handleEven, handleOdd) {
  if (number % 2 === 0) {
    handleEven();
  } else {
    handleOdd();
  }
}

function handleEven() {
  console.log('Number is even');
}

function handleOdd() {
  console.log('Number is odd');
}

handleNum(5, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);

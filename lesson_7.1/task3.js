function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Аргументи мають бути числами');
  }
  if (denominator === 0) {
    throw new Error('Ділення на нуль неможливе');
  }

  return numerator / denominator;
}

try {
  const result1 = divide(10, 2);
  console.log(result1);
} catch (error) {
  console.error('Сталася помилка:', error.message);
} finally {
  console.log('Робота завершена');
}

try {
  const result2 = divide('string', true);
  console.log(result2);
} catch (error) {
  console.error('Сталася помилка:', error.message);
} finally {
  console.log('Робота завершена');
}

try {
  const result3 = divide(10, 0);
  console.log(result3);
} catch (error) {
  console.error('Сталася помилка:', error.message);
} finally {
  console.log('Робота завершена');
}

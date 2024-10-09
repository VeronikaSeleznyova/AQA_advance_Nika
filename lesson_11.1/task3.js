async function fetchReq1() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchReq1:', error);
    throw error;
  }
}

async function fetchReq2() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchReq2:', error);
    throw error;
  }
}

Promise.all([fetchReq1(), fetchReq2()])
  .then(([todo, user]) => {
    console.log('Результат першого запиту (todo):', todo);
    console.log('Результат другого запиту (user):', user);
  })
  .catch((error) => {
    console.error('Сталася помилка у Promise.all:', error);
  });

Promise.race([fetchReq1(), fetchReq2()])
  .then((firstResult) => {
    console.log('Перший завершений запит:', firstResult);
  })
  .catch((error) => {
    console.error('Сталася помилка у Promise.race:', error);
  });

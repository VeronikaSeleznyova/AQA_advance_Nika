const apiReq1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  
  })
  .catch(error => {
    console.error('Error in apiReq1:', error);
    throw error;
  });

const apiReq2 = fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .catch(error => {
    console.error('Error in apiReq2:', error);
    throw error;
  });


Promise.all([apiReq1, apiReq2])
  .then(([todo, user]) => {
    console.log('Результат першого запиту (todo):', todo);
    console.log('Результат другого запиту (user):', user);
  })
  .catch((error) => {
    console.error('Сталася помилка у Promise.all:', error);
  });

Promise.race([apiReq1, apiReq2])
  .then((firstResult) => {
    console.log('Перший завершений запит:', firstResult);
  })
  .catch((error) => {
    console.error('Сталася помилка у Promise.race:', error);
  });
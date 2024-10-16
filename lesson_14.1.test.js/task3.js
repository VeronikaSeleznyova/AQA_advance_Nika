const axios = require('axios');

async function getToDo() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to request: ' + error.message);
  }
}

module.exports = getToDo;

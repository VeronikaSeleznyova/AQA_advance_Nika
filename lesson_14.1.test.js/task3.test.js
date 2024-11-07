jest.mock('axios');
const axios = require('axios');
const getToDo = require('../lesson_14.1.test.js/task3');

describe('getToDo', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('GET request', async () => {
    const todo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    };

    axios.get.mockResolvedValue({ data: todo });

    const fetchedToDo = await getToDo();
    expect(fetchedToDo).toEqual(todo);
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
  });
});

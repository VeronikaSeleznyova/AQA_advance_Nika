const axios = require('axios');
const assert = require('assert');

function handleError(error) {
  console.error('Помилка в тесті', error);
}

axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    assert.strictEqual(response.status, 200);
    const { userId, id, title, completed } = response.data;
    console.log({ userId, id, title, completed });
    console.log('--------------------------------');
  })
  .catch(handleError);

axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    assert.strictEqual(response.status, 200);
    const { userId, id, title, body } = response.data;
    console.log({ userId, id, title, body });
    console.log('--------------------------------');
  })
  .catch(handleError);

axios
  .get('https://jsonplaceholder.typicode.com/posts/3/comments')
  .then((response) => {
    assert.strictEqual(response.status, 200);
    const comments = response.data;
    comments.forEach((comment) => {
      console.log({
        postId: comment.postId,
        id: comment.id,
        name: comment.name,
        email: comment.email,
        body: comment.body,
      });
      console.log('--------------------------------');
    });
  })
  .catch(handleError);

async function postComments() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/comments?postId=1',
    );
    assert.strictEqual(response.status, 200);
    const comments = response.data;
    comments.forEach((comment) => {
      console.log({
        postId: comment.postId,
        id: comment.id,
        name: comment.name,
        email: comment.email,
        body: comment.body,
      });
      console.log('--------------------------------');
    });
  } catch (error) {
    handleError(error);
  }
}

async function createPost() {
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'new title',
        body: 'User1',
        userId: 1,
      },
      {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      },
    );

    assert.strictEqual(response.status, 201);
    console.log(response.data);
  } catch (error) {
    handleError(error);
  }
}

createPost();

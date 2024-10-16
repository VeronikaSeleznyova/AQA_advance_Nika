const patchPostTitle = require('../lesson_14.1.test.js/task2');

describe('patchPostTitle', () => {
  test('update the post title', async () => {
    const postId = 2;
    const newTitle = 'UpdateTitle';

    const updatedPost = await patchPostTitle(postId, newTitle);

    expect(updatedPost).toHaveProperty('title', newTitle);
    expect(updatedPost).toHaveProperty('id', postId);
  });
});

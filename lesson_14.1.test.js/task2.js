const axios = require('axios');

async function patchPostTitle(postId, newTitle) {
  try {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        title: newTitle,
      },
    );

    return response.data;
  } catch (error) {
    throw new Error('Failed to patch post: ' + error.message);
  }
}

module.exports = patchPostTitle;

const axios = require('axios');

async function fetchInvalidData() {
  try {
    const response = await axios.get('https://invalidurl.youtube.com');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data: ' + error.message);
  }
}

module.exports = fetchInvalidData;

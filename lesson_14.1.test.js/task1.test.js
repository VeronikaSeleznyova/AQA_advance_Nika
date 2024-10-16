const fetchInvalidData = require('./task1');

describe('fetchInvalidData', () => {
  test('recive an error when trying to fetch from invalid URL', async () => {
    await expect(fetchInvalidData()).rejects.toThrow('Failed to fetch data');
  });
});

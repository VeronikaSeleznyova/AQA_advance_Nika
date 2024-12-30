const { test, expect, request } = require('@playwright/test');

test.describe('API тести для /api/cars', () => {
  let apiContext;
  let createdCarId; 
  let authToken;


  test.beforeAll(async ({ playwright }) => {
    apiContext = await request.newContext({
      baseURL: process.env.BASE_URL,
    });

    const response = await apiContext.post('https://qauto.forstudy.space/api/auth/signin', {
      data: {
        email: 'vsel12@gmail.com',
        password: 'Passs888',
        remember: false,
      },
    });

    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    authToken = responseBody.data.token; 
  })

  test.afterAll(async () => {
    if (createdCarId) {
      const response = await apiContext.delete(`/api/cars/${createdCarId}`);
      expect(response.status()).toBe(200);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        status: 'ok',
        data: {
          carId: createdCarId,
        },
      });
      console.log(`Машина з ID ${createdCarId} була успішно видалена.`);
    }

    await apiContext.dispose();
  });

  test('Успішне створення машини', async () => {
    const response = await apiContext.post('/api/cars', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 122,
      },
    });

    expect(response.status()).toBe(200);
  
    const responseBody = await response.json();
    expect(responseBody).toEqual({
      status: 'ok',
      data: {
        id: expect.any(Number),
        carBrandId: expect.any(Number),
        carModelId: expect.any(Number),
        initialMileage: expect.any(Number),
        updatedMileageAt: expect.any(String),
        mileage: expect.any(Number),
        brand: expect.any(String),
        model: expect.any(String),
        logo: expect.any(String),
      },
    });
  
    createdCarId = responseBody.data.id;
  });


  test('Помилка при пропущеному carBrandId', async () => {
    const response = await apiContext.post('/api/cars', {
      headers: {
           Authorization: `Bearer ${authToken}`,
        },
      data: {
        carModelId: 1,
        mileage: 122,
      },
    });

    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toEqual({
        status: "error",
        message: "Bad request"
    });
  });


  test('Помилка при некоректному типі даних для mileage', async () => {
    const response = await apiContext.post('/api/cars', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      data: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 'invalid', 
      },
    });

    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toEqual({
        status: "error",
        message: "Bad request"
    });
  });
});
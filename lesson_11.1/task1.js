function dayWeather(day, weather) {
  console.log(`Today is ${day} ${weather}`);
}

setTimeout(dayWeather, 3000, 'Monday', '+15');

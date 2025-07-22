// index.js

const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load .env file

const app = express();
const PORT = 3000;

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;

  // Check if city or API key is missing
  if (!city || !apiKey) {
    return res.status(400).json({ error: 'City and API key are required' });
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    res.json({
      city: data.name,
      temperature: `${data.main.temp}°C`,
      description: data.weather[0].description,
      humidity: `${data.main.humidity}%`,
      windSpeed: `${data.wind.speed} m/s`
    });
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

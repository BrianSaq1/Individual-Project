const express = require('express');
const fetch = require('cross-fetch');
const app = express();
const path = require('path');

const apiKey = "5c0a6bec8482498b880184717230911";
const weatherApiUrl = "http://api.weatherapi.com/v1/forecast.json";

app.get("/", (req, res) => {
  res.send("Welcome to the Weather API!");
});

app.get("/api/weather/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const days = 7;
    const aqi = "yes";
    const alerts = "no";

    const apiUrl = `${weatherApiUrl}?key=${apiKey}&q=${city}&days=${days}&aqi=${aqi}&alerts=${alerts}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
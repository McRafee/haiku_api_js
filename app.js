const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Imposta la porta del server

// Supponiamo che tu abbia già caricato le tue Haiku dal file JSON in una variabile chiamata "haikuData"
const haikuData = require('./haiku_data.json');

// Endpoint per ottenere tutte le Haiku
app.get('/getAll', (req, res) => {
  res.json(haikuData);
});

// Endpoint di esempio per ottenere una Haiku casuale
app.get('/getRandom', (req, res) => {
  const randomIndex = Math.floor(Math.random() * haikuData.length);
  const randomHaiku = haikuData[randomIndex];
  res.json(randomHaiku);
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// apiRoutes.js
import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

router.get('/data', (req, res) => {
  // Remplacez ceci par le code pour obtenir vos données
  const data = { message: 'Hello, world!' };
  res.json(data);
});

router.get('/anime', async (req, res) => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/anime?q=konosuba');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  });

export default router;

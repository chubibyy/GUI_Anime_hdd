// apiRoutes.js
import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

router.get('/data', (req, res) => {
  // Remplacez ceci par le code pour obtenir vos données
  const data = { message: 'Hello, world!' };
  res.json(data);
});

//Get anime info from his name
router.get('/anime/:query', async (req, res) => {
    try {
      const { query } = req.params;
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      res.json(data.data[0]);
    } catch (error) {
      console.error('There was an error!', error);
    }
  });
  

export default router;

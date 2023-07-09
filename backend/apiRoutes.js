// apiRoutes.js
const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  // Remplacez ceci par le code pour obtenir vos données
  const data = { message: 'Hello, world!' };
  res.json(data);
});

module.exports = router;

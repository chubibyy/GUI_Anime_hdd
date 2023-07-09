const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Ajoute le middleware CORS à votre application


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});
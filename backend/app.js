const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const apiRoutes = require('./apiRoutes')

app.use(cors()); // Ajoute le middleware CORS à votre application

//Routage des API : http://localhost:3000/api/..
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

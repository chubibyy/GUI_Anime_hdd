import express from 'express';
import cors from 'cors';
import apiRoutes from './apiRoutes.js';

const app = express();
const port = 3000;


app.use(cors()); // Ajoute le middleware CORS à votre application

//Routage des API : http://localhost:3000/api/..
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

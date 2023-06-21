const PORT = 8000;
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log('El server está corriendo en el puerto ' + PORT));

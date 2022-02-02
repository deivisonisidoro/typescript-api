import express from 'express';
import routes from './routes'
import cors  from 'cors'

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(routes);

app.listen(PORT, HOST);
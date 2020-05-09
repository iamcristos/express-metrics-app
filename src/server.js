import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';

import route from './route';


const app = express();

app.use(helmet());
app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/metric', route);

app.all('*', (req, res) => res.status(404).send('there is no such endpoint'));

export default app;

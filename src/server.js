import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';

import route from './route';


const app = express();

app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use('/metric', route);

export default app;

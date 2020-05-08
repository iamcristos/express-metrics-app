import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import model from './model';


console.log(model.getMetric());


const app = express();

app.use(helmet());
app.use(cors());
app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is listening at ${port}`));

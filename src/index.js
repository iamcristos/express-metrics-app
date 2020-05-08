const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');


const app = express();

app.use(helmet());
app.use(cors());
app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is listening at ${port}`));

require('dotenv').config();

const express = require('express');

const { errors } = require('celebrate');

const helmet = require('helmet');

const bodyParser = require('body-parser');

const cors = require('cors');

const mongoose = require('mongoose');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const errorHandler = require('./middlewares/errorHandler');

// const rateLimiter = require('./middlewares/rateLimit');

// require('dotenv').config();

const {
  MONGO_DB_ADDRESS,
} = require('./utils/constants');

const router = require('./routes/index');

const app = express();

const allowedCors = [
  'http://localhost:3000',
  'api.movies-razorka.nomoredomains.icu',
  'https://api.movies-razorka.nomoredomains.icu',
];

app.use(cors({
  origin: allowedCors,
}));

const { PORT = 3000 } = process.env;

mongoose.connect(MONGO_DB_ADDRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/', router);

app.use(errorLogger);

app.use(helmet());

// app.use(rateLimiter);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {});

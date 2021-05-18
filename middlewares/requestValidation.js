const { celebrate, Joi, CelebrateError } = require('celebrate');

const isURL = require('validator/lib/isURL');

const {
  BAD_URL,
} = require('../utils/constants');

const urlValidator = (value) => {
  if (!isURL(value)) {
    throw new CelebrateError(`${value} ${BAD_URL}`);
  }
  return value;
};

const validateId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24).hex(),
  }),
});

const validateUpdateCurrentUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(), // .min(1).max(50),
    director: Joi.string().required(), // .min(1).max(50),
    duration: Joi.number().required(),
    year: Joi.string().required(), // .min(2).max(4),
    description: Joi.string().required(), // .min(1).max(500),
    image: Joi.string().required().custom(urlValidator),
    trailer: Joi.string().required().custom(urlValidator),
    thumbnail: Joi.string().required().custom(urlValidator),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(), // .min(1).max(30),
    nameEN: Joi.string().required(), // .min(1).max(30),
  }),
});

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().alphanum().length(24)
      .hex(),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8), // .pattern(new RegExp('^[A-Za-z0-9]{8,30}$')),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports = {
  validateId,
  validateUpdateCurrentUser,
  validateCreateMovie,
  validateDeleteMovie,
  validateLogin,
  validateSignup,
};

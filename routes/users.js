const userRouter = require('express').Router();

const { celebrate, Joi } = require('celebrate');

const {
  getCurrentUser,
  updateCurrentUser
} = require('../controllers/users');

userRouter.get('/users/me', getCurrentUser);

userRouter.put(
  '/users/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      email: Joi.string().required().email(),
    }),
  }),
  updateCurrentUser);

module.exports = userRouter;
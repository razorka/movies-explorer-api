const userRouter = require('express').Router();

const {

  validateUpdateCurrentUser,
} = require('../middlewares/requestValidation');

const {
  getCurrentUser,
  updateCurrentUser,
} = require('../controllers/users');

userRouter.get('/users/me', getCurrentUser);
userRouter.patch('/users/me', validateUpdateCurrentUser, updateCurrentUser);

module.exports = userRouter;

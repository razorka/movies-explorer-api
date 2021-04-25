const router = require('express').Router();

const {
  validateLogin,
  validateSignup,
} = require('../middlewares/requestValidation');

const {
  login,
  createUser,
} = require('../controllers/users');

const auth = require('../middlewares/auth');

const userRouter = require('./users');
const movieRouter = require('./movies');

const NotFoundError = require('../errors/NotFoundError');

const {
  NOT_FOUND_ERROR_MESSAGE,
} = require('../utils/constants');

router.post('/signin', validateLogin, login);
router.post('/signup', validateSignup, createUser);

router.use(auth, userRouter);
router.use(auth, movieRouter);

router.use('/*', () => {
  throw new NotFoundError(NOT_FOUND_ERROR_MESSAGE);
});

module.exports = router;

const Movie = require('../models/movie');

const NotFoundError = require('../errors/NotFoundError');
const ConflictError = require('../errors/ConflictError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');

const {
  NOT_FOUND_MOVIE_ERROR_MESSAGE,
  FORBIDDEN_DELETE_MOVIE_MESSAGE,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} = require('../utils/constants');

const getMovies = (req, res, next) => {
  // const owner = req.user._id;

  Movie.find() // { owner })
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const owner = req.user._id;

  Movie.create({ owner, ...req.body })
    .then((movie) => {
      res.status(201).send({ data: movie });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError(BAD_REQUEST);
      } else if (err.name === 'MongoError' && err.code === 11000) {
        throw new ConflictError(INTERNAL_SERVER_ERROR);
      }
      return next(err);
    })
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  const owner = req.user._id;
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(NOT_FOUND_MOVIE_ERROR_MESSAGE);
      }
      if (movie.owner.toString() !== owner) {
        throw new ForbiddenError(FORBIDDEN_DELETE_MOVIE_MESSAGE);
      } else {
        Movie.findByIdAndDelete(movieId)
          .then((deletedMovie) => {
            res.status(200).send({ data: deletedMovie });
          })
          .catch(next);
      }
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};

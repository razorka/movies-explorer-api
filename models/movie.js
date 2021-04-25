const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'страна создания фильма. Обязательное поле-строка'],
  },
  director: {
    type: String,
    required: [true, 'режиссёр фильма. Обязательное поле-строка'],
  },
  duration: {
    type: Number,
    required: [true, 'длительность фильма. Обязательное поле-число'],
  },
  year: {
    type: String,
    required: [true, 'год выпуска фильма. Обязательное поле-строка'],
  },
  description: {
    type: String,
    required: [true, 'описание фильма. Обязательное поле-строка'],
  },
  image: {
    type: String,
    required: [true, 'ссылка на постер к фильму. Обязательное поле-строка'],
    validate: {
      validator (v) {
        return isURL(v);
      },
      message: (props) => `${props.value} не является URL адресом`,
    },
  },
  trailer: {
    type: String,
    required: [true, 'ссылка на трейлер фильма. Обязательное поле-строка'],
    validate: {
      validator (v) {
        return isURL(v);
      },
      message: (props) => `${props.value} не является URL адресом для трейлера к фильму`,
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'миниатюрное изображение постера к фильму. Обязательное поле-строка'],
    validate: {
      validator (v) {
        return isURL(v);
      },
      message: (props) => `${props.value} не является URL адресом для миниатюрного изображения постера к фильму`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, '_id пользователя, который сохранил фильм. Обязательное поле'],
  },
  movieId: {
    type: Number,
    unique: true,
    required: [true, '_id фильма, который содержится в ответе сервиса MoviesExplorer. Обязательное поле'],
  },
  nameRU: {
    type: String,
    required: [true, 'название фильма на русском языке. Обязательное поле-строка'],
  },
  nameEN: {
    type: String,
    required: [true, 'название фильма на английском языке. Обязательное поле-строка'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
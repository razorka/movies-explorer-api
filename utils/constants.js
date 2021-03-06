const BAD_REQUEST = 'Неверно переданы данные';
const INTERNAL_SERVER_ERROR = 'На сервере произошла ошибка';
const BAD_URL = 'не является URL адресом';
const NOT_FOUND_MOVIE_ERROR_MESSAGE = 'Нет фильма с таким id';
const ERROR_KIND_OBJECT_ID = 'ObjectId';
const FORBIDDEN_DELETE_MOVIE_MESSAGE = 'Нет доступа к удалению фильма';
const NOT_AUTH_ERROR = 'Необходима авторизация';
const NOT_AUTH_ERROR_WRONG_EMAIL_PASSWORD = 'Неправильные почта или пароль';
const REQUEST_LOG_FILENAME = 'request.log';
const ERROR_LOG_FILENAME = 'error.log';
const USER_CONFLICT_MESSAGE = 'Пользователь с такими данными уже существует';
const INVALID_USER_ID_MESSAGE = 'Введен невалидный id пользователя';
const NOT_FOUND_USER_ID_MESSAGE = 'Нет пользователя с таким id';
const DUPLICATE_EMAIL_ERROR_MESSAGE = 'Пользователь с таким email уже существует';

const MONGO_DB_ADDRESS = 'mongodb://localhost:27017/bitfilmsdb';

const USER_SCHEMA_REQUIRED_MESSAGES = {
  EMAIL: 'Поле "email - электронная почта" является обязательным',
  PASSWORD: 'Поле "password - пароль" является обязательным',
  NAME: 'Поле "name - имя пользователя" является обязательным',
};
const USER_SCHEMA_VALIDATE_MESSAGES = {
  EMAIL: 'не является email',
  PASSWORD: 'Данный пароль не является надежным',
  NAME: 'не соответсвует длине строки - от 2 до 30 символов',
};

const MOVIE_SCHEMA_REQUIRED_MESSAGES = {
  COUNTRY: 'Cтрана создания фильма. Обязательное поле-строка',
  DIRECTOR: 'Режиссёр фильма. Обязательное поле-строка',
  DURATION: 'Длительность фильма. Обязательное поле-число',
  YEAR: 'Год выпуска фильма. Обязательное поле-строка',
  DESCRIPTION: 'Описание фильма. Обязательное поле-строка',
  IMAGE: 'Ссылка на постер к фильму. Обязательное поле-строка',
  TRAILER: 'Ссылка на трейлер фильма. Обязательное поле-строка',
  THUMBNAIL: 'Миниатюрное изображение постера к фильму. Обязательное поле-строка',
  OWNER: '_id пользователя, который сохранил фильм. Обязательное поле',
  MOVIE_ID: '_id фильма, который содержится в ответе сервиса MoviesExplorer. Обязательное поле',
  NAME_RU: 'Название фильма на русском языке. Обязательное поле-строка',
  NAME_EN: 'Название фильма на английском языке. Обязательное поле-строка',
};
const MOVIE_SCHEMA_VALIDATE_MESSAGES = {
  IMAGE: 'не является URL адресом для постера к фильму',
  TRAILER: 'не является URL адресом для трейлера к фильму',
  THUMBNAIL: 'не является URL адресом для миниатюрного изображения постера к фильму',
};

module.exports = {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  BAD_URL,
  NOT_FOUND_MOVIE_ERROR_MESSAGE,
  FORBIDDEN_DELETE_MOVIE_MESSAGE,
  NOT_AUTH_ERROR,
  ERROR_KIND_OBJECT_ID,
  NOT_AUTH_ERROR_WRONG_EMAIL_PASSWORD,
  MONGO_DB_ADDRESS,
  USER_SCHEMA_REQUIRED_MESSAGES,
  USER_SCHEMA_VALIDATE_MESSAGES,
  MOVIE_SCHEMA_REQUIRED_MESSAGES,
  MOVIE_SCHEMA_VALIDATE_MESSAGES,
  REQUEST_LOG_FILENAME,
  ERROR_LOG_FILENAME,
  INVALID_USER_ID_MESSAGE,
  NOT_FOUND_USER_ID_MESSAGE,
  DUPLICATE_EMAIL_ERROR_MESSAGE,
  USER_CONFLICT_MESSAGE,
};

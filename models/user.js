const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const isStrongPassword = require('validator/lib/isStrongPassword');
const isLength = require('validator/lib/isLength');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Поле "email - электронная почта" является обязательным'],
    unique: true,
    validate: {
      validator (v) {
        return isEmail(v);
      },
      message: (props) => `${props.value} не является email`,
    },
  },
  password: {
    type: String,
    required: [true, 'Поле "password - пароль" является обязательным'],
    validate: {
      validator (v) {
        return isStrongPassword(v);
      },
      message: () => `Данный пароль не является надежным`,
    },
    select: false,
  },
  name: {
    type: String,
    required: [true, 'Поле "name - имя пользователя" является обязательным'],
    validate: {
      validator (v) {
        return isLength(v, {min: 2, max: 30});
      },
      message: (props) => `${props.value} не соответсвует длине строки - от 2 до 30 символов`,
    },
  },
});

userSchema.statics.findUserByCredentials = function fn(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
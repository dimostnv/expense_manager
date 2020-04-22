const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptor = {
  encrypt: function (input) {
    return bcrypt.hash(input, saltRounds)
  },
  compare: function (input, target) {
    return bcrypt.compare(input, target)
  }
};

module.exports = encryptor;
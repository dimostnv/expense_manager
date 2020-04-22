const jwt = require('jsonwebtoken');
const secret = 'secret';
const authCookie = 'auth_cookie';

const authenticator = {
  createToken: function (data) {
    return jwt.sign(data, secret);
  },
  validateToken: function (token) {
    return new Promise(function (resolve, reject) {
      jwt.verify(token, secret, (err, data) => {
        if (err) {reject(err); return;}
        resolve(data);
      })
    })
  }
};

module.exports = {
  authCookie,
  authenticator
};
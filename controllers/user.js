const {userModel, tokenBlacklist} = require('../models/index');

const encryptor = require('../utils/encriptor');
const {authenticator, authCookie} = require('../utils/authenticator');

const userController = {
  get: {
    logout: function (req, res, next) {
      const token = new tokenBlacklist({token: req.cookies[authCookie]});

      token.save().then(() => {
        res.clearCookie(authCookie).send('Logout successful!');
      }).catch((err) => {
        next(err)
      });
    }
  },
  post: {
    register: function (req, res, next) {
      const userData = {...req.body};

      userModel.create(userData)
        .then((user) => {
          const token = authenticator.createToken({id: user._id});
          res.cookie(authCookie, token).send(user);
        }).catch(next);
    },
    login: function (req, res, next) {
      const {username, password} = {...req.body};

      userModel.findOne({username}).populate('expenses').then((user) => {
        encryptor.compare(password, user.password).then((match) => {
          if (match) {
            const token = authenticator.createToken({id: user._id});
            res.cookie(authCookie, token).send(user);
          }
        })
      }).catch(next);
    }
  }
};

module.exports = userController;
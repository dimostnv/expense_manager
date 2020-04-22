const {userModel} = require('../models/index');

const encryptor = require('../utils/encriptor');
const {authenticator, authCookie} = require('../utils/authenticator');

const userController = {
  post: {
    register: function (req, res, next) {
      const userData = {...req.body};

      userModel.create(userData)
        .then(() => {
          res.send('User created!');
        }).catch(next);
    },
    login: function (req, res, next) {
      const {username, password} = {...req.body};

      userModel.findOne({username}).then((user) => {
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
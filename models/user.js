const mongoose = require('mongoose');
const encryptor = require('../utils/encriptor');

const userModelSchema = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }/*,
  expenses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'expenseModel'
  }*/

});

userModelSchema.pre('save', function (next) {
  encryptor.encrypt(this.password).then((hash) => {
    this.password = hash;
    next();
  }).catch(next);
});

module.exports = new mongoose.model('userModel', userModelSchema);
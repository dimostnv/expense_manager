const mongoose = require('mongoose');

const {databaseURL} = require('./config');

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

module.exports = () => {
  return mongoose.connect(databaseURL, opts);
};
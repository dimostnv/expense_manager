const mongoose = require('mongoose');

const accountModelSchema = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectID,
    ref:'userModel'
  }
});

module.exports = new mongoose.model('accountModel', accountModelSchema);
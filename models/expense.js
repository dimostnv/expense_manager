const mongoose = require('mongoose');

const expenseModelSchema = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  category: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel'
  }
});

module.exports = mongoose.model('expenseModel', expenseModelSchema);
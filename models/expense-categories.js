const mongoose = require('mongoose');

const expenseCategorySchema = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('expenseCategory', expenseCategorySchema);
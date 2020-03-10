const mongoose = require('mongoose');

const expenseCategorySchema = mongoose.Schema({
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('expenseCategory', expenseCategorySchema);
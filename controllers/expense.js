const {expenseModel} = require('../models/index');

const expense = {
  getAll: function (req, res, next) {
    expenseModel.find({})
      .then((expenses) => {
        res.send(expenses);
      }).catch(next);
  },
  getOne: function (req, res, next) {
    const targetId = req.params.id;

    expenseModel.findById(targetId)
      .then((expense) => {
        res.send(expense);
      }).catch(next);
  },
  create: function (req, res, next) {
    const data = {title, description, category, amount} = req.body;

    expenseModel.create(data)
      .then(() => {
        res.send('Expense added!');
      }).catch(next);
  },
  update: function (req, res, next) {
    const targetId = req.params.id;

    const data = {title, description, category, amount} = req.body;

    expenseModel.findByIdAndUpdate(targetId, data)
      .then(() => {
        res.send('Expense updated!');
      }).catch(next);
  },
  remove: function (req, res, next) {
    const targetId = req.params.id;

    expenseModel.findByIdAndDelete(targetId)
      .then(() => {
        res.send('Expense deleted!')
      }).catch(next);
  }
};

module.exports = expense;
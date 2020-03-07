const {expenseModel} = require('../models/index');

const expense = {
  getAll: function (req, res, next) {

    expenseModel.find({}).sort({created:-1}).limit(10)
      .then((expenses) => {
        console.log(expenses);
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
  getByYear: function (req, res, next){
    const year = req.params.year;

    expenseModel
      .find({'created': {'$gt': new Date(year, 0, 1), '$lt': new Date(year, 11, 31)}})
      .then((data) => {
        res.send(data);
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

    expenseModel.findByIdAndUpdate(targetId, {$set: {...data}})
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
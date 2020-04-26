const {expenseModel, userModel} = require('../models/index');

const expense = {
  getAll: function (req, res, next) {

    expenseModel.find({}).sort({created: -1}).limit(10)
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
    const username = req.body.user;

    userModel.findOne({username}).then((user) => {
      const owner = user._id;
      const expenseData = {...data, owner};
      expenseModel.create(expenseData)
        .then((expense) => {
          userModel.findOneAndUpdate({"_id": owner}, {"$push": {"expenses": expense}})
            .then(() => {
              res.send(expense);
            })
        });
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
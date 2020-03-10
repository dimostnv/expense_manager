const {expenseCategoryModel} = require('../models/index');

const expenseCategories = {
  getAll: function (req, res, next) {
    expenseCategoryModel.find()
      .then((categories) => {
        res.send(categories);
      }).catch(next);
  },
  create: function (req, res, next) {
    const category = req.body;

    expenseCategoryModel.create({category})
      .then(() => res.send('Categories added'));
  }
};

module.exports = expenseCategories;
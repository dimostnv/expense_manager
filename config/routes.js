const {router: indexRouter, expensesRouter, usersRouter} = require('../routes/index');

module.exports = (app) => {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/expenses', expensesRouter);
};
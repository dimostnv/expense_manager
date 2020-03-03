const env = process.env.NODE_ENV || 'development';

const endpoint = {
  'development': {
    port: 5000,
    databaseURL: 'mongodb://localhost:27017/expenseManager'
  },
  'deployment': {}
};

module.exports = endpoint[env];
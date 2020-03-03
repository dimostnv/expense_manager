global.__basedir = __dirname;

const express = require('express');
const {port} = require('./config/config');

const app = express();

const addRoutes = require('./config/routes');
const attachProps = require('./config/express');
const dbConnect = require('./config/db');

attachProps(app);
addRoutes(app);

dbConnect().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
  });
});
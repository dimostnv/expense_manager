const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (app) => {
// utils setup
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({extended: false}));

  app.use(cookieParser());

  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
};
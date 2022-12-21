const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
// const cookieParser = require('cookie-parser');
const ssr = require('../middlewares/ssr');
const sessionConfig = require('./sessionConfig');
const getUser = require('../middlewares/getUser');

function expressConfig(app) {
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(getUser);
  app.use(ssr);
}

module.exports = expressConfig;

require('dotenv').config();
require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const { sequelize } = require('./db/models');
const mainRouter = require('./routes/main.routes');
const authRouter = require('./routes/auth.routes');

const app = express();
expressConfig(app);

app.use('/', mainRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, async () => {
  console.log('Веб-сервер слушает порт', PORT);
  try {
    await sequelize.authenticate();
    console.log('БД- сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }
});

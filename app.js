require('dotenv').config();
require('@babel/register');
const express = require('express');
const path = require('path');
const expressConfig = require('./config/express');
const { sequelize } = require('./db/models');
const mainRouter = require('./routes/main.routes');
const loginRouter = require('./routes/login.routes');
const registerRouter = require('./routes/register.routes');
const logoutRouter = require('./routes/logout.routes');
// const houseRouter = require('./routes/house.router');
const favoritesRouter = require('./routes/favorites.router');

const app = express();
expressConfig(app);
app.use(express.json({ exetende: true }));
// app.use('/img', require.static(path.join('./public/img')));
app.use('api', require('./routes/upload.routes'));

app.use('/', mainRouter);
app.use('/', favoritesRouter);
app.use('/auth', loginRouter);
app.use('/auth', registerRouter);
app.use('/auth', logoutRouter);
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

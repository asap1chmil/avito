const bcrypt = require('bcrypt');
const authRouter = require('express').Router();

const {
  User,
} = require('../db/models');

const LoginPage = require('../Views/auth/LoginPage');
const RegisterPage = require('../Views/auth/RegisterPage');

authRouter.get('/login', async (req, res) => {
  try {
    res.renderComponent(LoginPage);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

authRouter.post('/login', async (req, res) => {
  const hasLogin = Boolean(req.body.login);
  const hasPassword = Boolean(req.body.password);
  if (!hasLogin || !hasPassword) {
    const message = 'Введите логин и пароль';
    res.status(200).send(message);
    return;
  }
  try {
    const user = await User.findOne({
      where: { login: req.body.login },
    });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      req.session.userId = user.id;
      res.redirect('/');
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

authRouter.get('/', async (req, res) => {
  try {
    res.renderComponent(RegisterPage);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

authRouter.post('/', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { login: req.body.login },
    });
    if (user) {
      return res.status(420).send('Пользователь с таким логином уже существует');
    }
    if (req.body.password !== req.body.passwordRepeat) {
      return res.status(420).send('Пароли не совпадают');
    }
    const newUser = await User.create({
      name: req.body.name,
      login: req.body.login,
      password: await bcrypt.hash(req.body.password, 10),
    });
    req.session.userId = newUser.id;
    res.json({ message: 'success' });
    return undefined;
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

authRouter.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) console.error(error);
    else {
      res.clearCookie('user_sid');
      res.redirect('/');
    }
  });
});

module.exports = authRouter;

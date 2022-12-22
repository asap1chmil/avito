const bcrypt = require('bcrypt');
const authRouter = require('express').Router();

const {
  User,
} = require('../db/models');

const LoginPage = require('../Views/auth/LoginPage');

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
    return res.json({ status: 'error', message: 'Введите логин и пароль' });
  }
  try {
    const user = await User.findOne({
      where: { login: req.body.login },
    });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      req.session.userId = user.id;
      res.redirect('/');
    } else {
      return res.json({ status: 'error', message: 'Пользователь не зарегестрирован' });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = authRouter;

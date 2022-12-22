const registerRouter = require('express').Router();
const bcrypt = require('bcrypt');
const RegisterPage = require('../Views/auth/RegisterPage');
const { User } = require('../db/models');

registerRouter.get('/register', async (req, res) => {
  try {
    res.renderComponent(RegisterPage);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

registerRouter.post('/register', async (req, res) => {
  const {
    name, login, password, passwordRepeat,
  } = req.body;

  try {
    const user = await User.findOne({
      where: { login: req.body.login },
    });
    if (!name || !login || !password || !passwordRepeat) {
      return res.json({ status: 'error', message: 'заполните все поля' });
    }
    if (password.length < 8) {
      return res.json({ status: 'error', message: 'Пароль должен содержать более 8 символов' });
    }
    if (user) {
      return res.json({ status: 'error', message: 'Пользователь с таким логином уже существует' });
    }
    if (req.body.password !== req.body.passwordRepeat) {
      return res.json({ status: 'error', message: 'Пароли не совпадают' });
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

module.exports = registerRouter;

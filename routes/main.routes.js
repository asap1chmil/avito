const mainRouter = require('express').Router();
const HomePage = require('../Views/HomePage');

mainRouter.get('/', async (req, res) => {
  res.renderComponent(HomePage);
});

module.exports = mainRouter;

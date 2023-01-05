const favoritesRouter = require('express').Router();
const Favorites = require('../Views/Favorites');

favoritesRouter.get('/favorites', async (req, res) => {
  res.renderComponent(Favorites);
});

module.exports = favoritesRouter;

const favoritesRouter = require('express').Router();
const Favorites = require('../Views/Favorites');
const { User, Favorite, House } = require('../db/models');

favoritesRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findOne({ where: { id: userId } });
  //   console.log(user);
  const favoriteHouses = await Favorite.findAll({ where: { user_id: userId } });
  const houseList = await Promise.all(
    favoriteHouses.map(async (el) => await House.findOne({ where: { id: el.house_id } })),
  );
  // console.log(productList);
  res.renderComponent(Favorites, {
    title: 'My favorites',
    user,
    houses: houseList,
  }, { doctype: false });
});

favoritesRouter.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const house = await Favorite.findOne({ where: { house_id: Number(id) } });
  house.destroy();
  res.json({ message: 'done' });
});

module.exports = favoritesRouter;

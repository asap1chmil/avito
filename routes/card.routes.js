const cardRouter = require('express').Router();
const { User, Favorite, House } = require('../db/models');

cardRouter.post('/', async (req, res) => {
  const { userId } = req.session;
  const elemId = req.body.id;
  const user = userId && (await User.findByPk(Number(userId)));
  const elem = await Favorite.findOne({ where: { user_id: userId, house_id: elemId } });
  console.log('Товарб добавлен в избранное', elem);
  if (!elem) {
    await Favorite.create({
      user_id: user.id,
      house_id: req.body.id,
    });
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

cardRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));
  const house = await House.findOne({ where: Number(id), raw: true });

  res.json({ house });
});

module.exports = cardRouter;

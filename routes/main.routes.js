const mainRouter = require('express').Router();
const HomePage = require('../Views/HomePage');
const { House } = require('../db/models');

mainRouter.get('/', async (req, res) => {
  const id = 1;
  console.log(id);
  try {
    const houses = await House.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
      // where: { id },
    });
    console.log(('Все дома:', houses));
    res.renderComponent(HomePage, { houses });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

mainRouter.post('/', async (req, res) => {
  const userId = res.locals.user.id;
  const {
    type, description, price, address,
  } = req.body;
  try {
    const newHouse = await House.create({
      type,
      description,
      price,
      address,
      user_id: userId,
    });
    res.renderComponent(HomePage, { house: newHouse });
  } catch (error) {
    console.error(error);
  }
});

module.exports = mainRouter;

const sortRouter = require('express').Router();
const { User, House } = require('../db/models');
const HouseContainer = require('../Views/HouseContainer');

// в порядке возрастания
sortRouter.get('/dn', async (req, res) => {
  const { userId } = req.session;
  const user = userId && await User.findByPk(Number(userId));
  const houses = await House.findAll({
    order: [
      // сортировка по возрастанию цены
      ['price', 'ASC'],
      // если цены совпадают, то сортировка по id
      ['id', 'DESC'],
    ],
  });
  console.log(houses);
  res.renderComponent(HouseContainer, { houses, user });
});

sortRouter.get('/up', async (req, res) => {
  const { userId } = req.session;
  console.log(userId);
  const user = userId && await User.findByPk(Number(userId));
  const houses = await House.findAll({
    order: [
      // сортировка по убыванию цены
      ['price', 'DESC'],
      // если цены совпадают, то сортировка по id
      ['id', 'DESC'],
    ],
  });
  // console.log(houses);
  res.renderComponent(HouseContainer, { houses, user });
});

module.exports = sortRouter;

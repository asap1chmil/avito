const house = require('express').Router();
const viewHouse = require('../Views/House');
const { House } = require('../db/models');
const HomePage = require('../Views/HomePage');

house.get('/', async (req, res) => {
  const id = req.session.userId;
  console.log(id);
  const { user } = res.locals;
  try {
    const houses = await House.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
      where: { user_id: id },
    });
    console.log(('Все дома:', houses));
    res.renderComponent(viewHouse, { houses, user });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// house.post('/', async (req, res) => {
//   const userId = res.locals.user.id;
//   const {
//     type, description, price, address,
//   } = req.body;
//   try {
//     const newHouse = await House.create({
//       type,
//       description,
//       price,
//       address,
//       user_id: userId,
//     });
//     res.renderComponent(viewHouse, { house: newHouse });
//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = house;

const React = require('react');

const House = require('./House');

module.exports = function HouseContainer({ houses, user }) {
  console.log('HouseContainer called');

  return (
    <div className="blockProducts">
      {houses.map((house) => (
        <House key={house.id} house={house} user={user} />
      ))}
    </div>
  );
};

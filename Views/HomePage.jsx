const React = require('react');
const Layout = require('./Layout');
const House = require('./House');

function HomePage({ house, user }) {
  return (
    <Layout title="HomePage" user={user}>
      {/* <div id="blockHouses">
        {house.map((el) => (
          <House key={el.id} house={el} />
        ))}
      </div> */}
    </Layout>
  );
}

module.exports = HomePage;

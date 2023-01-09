const { useContext } = require('react');
const React = require('react');
const LocalsContext = require('../middlewares/LocalsContext');
const Card = require('./Card');
const Layout = require('./Layout');

const divStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
};

function HomePage({ houses }) {
  const { user } = useContext(LocalsContext);
  return (
    <Layout>
      {' '}
      {user && (
        <div id="blockProducts" style={divStyle}>
          {houses.map((house) => (
            <Card key={house.id} house={house} />
          ))}
        </div>
      )}
    </Layout>
  );
}

module.exports = HomePage;

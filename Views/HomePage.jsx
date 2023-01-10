const { useContext } = require('react');
const React = require('react');
const LocalsContext = require('../middlewares/LocalsContext');
const HouseContainer = require('./HouseContainer');
const Layout = require('./Layout');

function HomePage({ houses }) {
  const { user } = useContext(LocalsContext);
  return (
    <Layout>
      {' '}
      {user && (
      <div>
        <div className="sort">
          <button className="sort-dn btn btn-primary">Возрастанию цены</button>
          <button className="sort-up btn btn-primary">Убыванию цены</button>
        </div>
        <HouseContainer houses={houses} user={user} />
      </div>
      )}
      <script src="/js/homePage.js" defer />
    </Layout>
  );
}

module.exports = HomePage;

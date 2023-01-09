const React = require('react');
const Layout = require('./Layout');
const FavoriteProductCard = require('./FavoriteProductCard');

module.exports = function Favorites({ title, user, houses }) {
  return (
    <Layout title={title} user={user}>
      <h1 className="welcome-favorites">Добро пожаловать в избранное!</h1>
      <div className="favorite-product">
        { houses.map((house) => <FavoriteProductCard key={house.id} house={house} user={user} />)}
      </div>
      <script src="/js/deleteFavorite.js" />
    </Layout>

  );
};

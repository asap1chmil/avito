const React = require('react');
const Layout = require('./Layout');

function HomePage({ posts, user }) {
  return (
    <Layout title="Home Page" user={user}>
    </Layout>
  );
}

module.exports = HomePage;
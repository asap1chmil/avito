const { useContext } = require('react');
const React = require('react');
const LocalsContext = require('../middlewares/LocalsContext');

module.exports = function NavBar() {
  const { user } = useContext(LocalsContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Cian.ru
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!user && (
              <li className="nav-item">
                <a className="nav-link" href="/auth/login">
                  Login
                </a>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <a className="nav-link" href="/auth/register">
                  Register
                </a>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <span className="nav-link">
                  Hello,
                  {' '}
                  {user.name}
                  !
                </span>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <a className="nav-link" href="/office">
                  Favorites
                </a>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <a className="nav-link" href="/auth/logout">
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

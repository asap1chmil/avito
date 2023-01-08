const { useContext } = require('react');
const React = require('react');
const LocalsContext = require('../middlewares/LocalsContext');

module.exports = function NavBar() {
  const { user } = useContext(LocalsContext);
  return (

<div class="jumbotron jumbotron-fluid">
  <div class="container">
  <a>Здесь должны быть шарики, установить новогоднюю мотню от Яндекс </a>
  </div>


    <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
      <div className="container-fluid">
      {/* <img className="logo" src="Views/clubs.png" width="50" height="50" alt="X"></img> */}
      <img className="logo" src="https://ru.dreamstime.com/%D1%81%D1%82%D0%BE%D0%BA%D0%BE%D0%B2%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-rf-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D1%81%D0%BF%D0%B8%D1%80%D0%B0-%D1%8C%D0%BD%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5-%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0-image36825045" width="50" height="50" alt="X"></img>
        <a className="navbar-brand" href="/">
          FullHouse
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
                <a className="nav-link" href="/favorites">
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

    </div>

  );
};

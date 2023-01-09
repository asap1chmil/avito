const { useContext } = require('react');
const React = require('react');
const LocalsContext = require('../middlewares/LocalsContext');

module.exports = function NavBar() {
  const { user } = useContext(LocalsContext);
  return (

<div class="jumbotron jumbotron-fluid">
  <div class="container">
  {/* <a>Здесь должны быть шарики, установить новогоднюю мотню от Яндекс </a> */}
  <div class="b-page_newyear">

				<div class="b-page__content">

						<i class="b-head-decor">

								<i class="b-head-decor__inner b-head-decor__inner_n1">

										<div class="b-ball b-ball_n1 b-ball_bounce" data-note="0"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n2 b-ball_bounce" data-note="1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n3 b-ball_bounce" data-note="2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n4 b-ball_bounce" data-note="3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n5 b-ball_bounce" data-note="4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n6 b-ball_bounce" data-note="5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n7 b-ball_bounce" data-note="6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n8 b-ball_bounce" data-note="7"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n9 b-ball_bounce" data-note="8"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

								</i>

								<i class="b-head-decor__inner b-head-decor__inner_n2">

										<div class="b-ball b-ball_n1 b-ball_bounce" data-note="9"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n2 b-ball_bounce" data-note="10"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n3 b-ball_bounce" data-note="11"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n4 b-ball_bounce" data-note="12"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n5 b-ball_bounce" data-note="13"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n6 b-ball_bounce" data-note="14"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n7 b-ball_bounce" data-note="15"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n8 b-ball_bounce" data-note="16"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n9 b-ball_bounce" data-note="17"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

								</i>

								<i class="b-head-decor__inner b-head-decor__inner_n3">

										<div class="b-ball b-ball_n1 b-ball_bounce" data-note="18"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n2 b-ball_bounce" data-note="19"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n3 b-ball_bounce" data-note="20"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n4 b-ball_bounce" data-note="21"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n5 b-ball_bounce" data-note="22"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n6 b-ball_bounce" data-note="23"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n7 b-ball_bounce" data-note="24"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n8 b-ball_bounce" data-note="25"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n9 b-ball_bounce" data-note="26"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

								</i>

								<i class="b-head-decor__inner b-head-decor__inner_n4">

										<div class="b-ball b-ball_n1 b-ball_bounce" data-note="27"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n2 b-ball_bounce" data-note="28"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n3 b-ball_bounce" data-note="29"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n4 b-ball_bounce" data-note="30"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n5 b-ball_bounce" data-note="31"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n6 b-ball_bounce" data-note="32"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n7 b-ball_bounce" data-note="33"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n8 b-ball_bounce" data-note="34"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n9 b-ball_bounce" data-note="35"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

								</i>

								<i class="b-head-decor__inner b-head-decor__inner_n5">

										<div class="b-ball b-ball_n1 b-ball_bounce" data-note="0"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n2 b-ball_bounce" data-note="1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n3 b-ball_bounce" data-note="2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n4 b-ball_bounce" data-note="3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n5 b-ball_bounce" data-note="4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n6 b-ball_bounce" data-note="5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n7 b-ball_bounce" data-note="6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n8 b-ball_bounce" data-note="7"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n9 b-ball_bounce" data-note="8"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

								</i>

								<i class="b-head-decor__inner b-head-decor__inner_n6">

										<div class="b-ball b-ball_n1 b-ball_bounce" data-note="9"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n2 b-ball_bounce" data-note="10"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n3 b-ball_bounce" data-note="11"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n4 b-ball_bounce" data-note="12"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n5 b-ball_bounce" data-note="13"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n6 b-ball_bounce" data-note="14"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n7 b-ball_bounce" data-note="15"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n8 b-ball_bounce" data-note="16"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n9 b-ball_bounce" data-note="17"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

								</i>

								<i class="b-head-decor__inner b-head-decor__inner_n7">

										<div class="b-ball b-ball_n1 b-ball_bounce" data-note="18"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n2 b-ball_bounce" data-note="19"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n3 b-ball_bounce" data-note="20"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n4 b-ball_bounce" data-note="21"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n5 b-ball_bounce" data-note="22"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n6 b-ball_bounce" data-note="23"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n7 b-ball_bounce" data-note="24"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n8 b-ball_bounce" data-note="25"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_n9 b-ball_bounce" data-note="26"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

										<div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div>

								</i>

						</i>

				</div>

		</div>

		<link rel="stylesheet" href="https://www.expertplus.ru/UserFiles/Image/content/new_year/yandex-balls/style.css"/>

		<script src="https://www.expertplus.ru/UserFiles/Image/content/new_year/yandex-balls/script.js" defer></script>
  </div>


    <nav className="navbar navbar-expand-lg bg-dark bg-gradient" id="nav-head">
      <div className="container-fluid">
      {/* <img className="logo" src="Views/clubs.png" width="50" height="50" alt="X"></img> */}
      <img className="logo" src="public/img2/clubs.png" width="50" height="50" alt="X"></img>
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

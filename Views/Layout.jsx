const React = require('react');
const NavBar = require('./NavBar');

function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/css/resize.css" />
      </head>

      <body>
        <NavBar user={user} />

        <div className="jumbotron p-3 p-md-5 text-white rounded bg-secondary">
        <div className="textMoving">
          <h1 className="fhName">FullHouse</h1>
          <p className="slogan">Лучшее агенство недвижимости в Санкт-Петербурге!</p>
          <p className="linf-for-question"><a href="#" class="text-white font-weight-bold">Ссылка на почту?</a></p>
        </div>
      </div>

        <div className="container">{children}
         </div>
      </body>

      <footer className="mastfoot">
        <div className="inner">
          <p>Ссылка на почту <a href="https://getbootstrap.com/">ПОЧТА</a></p>
          <p>OWLS SPb, 2023 г.</p>
          <p>© Все права защищены</p>
        </div>
      </footer>

    </html>
  );
}

module.exports = Layout;

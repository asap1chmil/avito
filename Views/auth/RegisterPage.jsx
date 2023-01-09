const React = require('react');
const Layout = require('../Layout');

module.exports = function RegisterPage({ user }) {
  return (
    <Layout user={user}>
      <form action="/auth/register" method="POST" id="registerForm">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
            name="name"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Login
          </label>
          <input
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
            name="login"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="password"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label"
          >
            Repeat Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="passwordRepeat"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-secondary" id="btn-reg">
          Submit
        </button>
      </form>
      <script src="/js/registerPage.js" defer />
    </Layout>
  );
};

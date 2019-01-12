import { Component } from "react";
import Layout from '../components/Layout.js';
import { getCookie, removeCookie } from "../lib/session";
import { signIn, redirectIfAuthenticated } from "../lib/auth";
import Success from "../components/Success";
import Error from "../components/Error";
import { isAuthenticated } from "../lib/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getInitialProps(ctx) {

    if (redirectIfAuthenticated(ctx)) {
      return {};
    }

    const success = getCookie("success", ctx.req);

    if (success) {
      removeCookie("success");
    }

    return {
      authenticated: isAuthenticated(ctx),
      success
    };
  }

  render() {
    const { url, success, authenticated } = this.props;
    const { error } = this.state;
    return (
      <Layout authenticated={authenticated}>
        {success && <Success message={success} />}
        {error && <Error message={error} />}
        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="username" name="username" />
              <input type="password" placeholder="password" name="password" />
              <button>login</button>
            </form>
          </div>
        </div>
        <style jsx>{`
        @import url(https://fonts.googleapis.com/css?family=Roboto:300);

        .login-page {
          width: 360px;
          padding: 8% 0 0;
          margin: auto;
        }
        .form {
          position: relative;
          z-index: 1;
          background: #FFFFFF;
          max-width: 360px;
          margin: 0 auto 100px;
          padding: 45px;
          text-align: center;
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        }
        .form input {
          font-family: "Roboto", sans-serif;
          outline: 0;
          background: #f2f2f2;
          width: 100%;
          border: 0;
          margin: 0 0 15px;
          padding: 15px;
          box-sizing: border-box;
          font-size: 14px;
        }
        .form button {
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          outline: 0;
          background: #4CAF50;
          width: 100%;
          border: 0;
          padding: 15px;
          color: #FFFFFF;
          font-size: 14px;
          -webkit-transition: all 0.3 ease;
          transition: all 0.3 ease;
          cursor: pointer;
        }
        .form button:hover,.form button:active,.form button:focus {
          background: #43A047;
        }
        .container {
          position: relative;
          z-index: 1;
          max-width: 300px;
          margin: 0 auto;
        }
        .container:before, .container:after {
          content: "";
          display: block;
          clear: both;
        }
        .container .info {
          margin: 50px auto;
          text-align: center;
        }
        .container .info h1 {
          margin: 0 0 15px;
          padding: 0;
          font-size: 36px;
          font-weight: 300;
          color: #1a1a1a;
        }
        .container .info span {
          color: #4d4d4d;
          font-size: 12px;
        }
        .container .info span a {
          color: #000000;
          text-decoration: none;
        }
        .container .info span .fa {
          color: #EF3B3A;
        }
        body {
          background: #76b852; /* fallback for old browsers */
          background: -webkit-linear-gradient(right, #76b852, #8DC26F);
          background: -moz-linear-gradient(right, #76b852, #8DC26F);
          background: -o-linear-gradient(right, #76b852, #8DC26F);
          background: linear-gradient(to left, #76b852, #8DC26F);
          font-family: "Roboto", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;      
        }
        `}
        </style>

      </Layout>
    );
  }

  handleSubmit = async e => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    const error = await signIn(username, password);

    if (error) {
      this.setState({
        error
      });
      return false;
    }
  };
}
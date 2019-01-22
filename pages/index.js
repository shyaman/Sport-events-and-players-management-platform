import Layout from '../components/Layout.js'
import { Component } from "react";
import PropTypes from "prop-types";
import { isAuthenticated } from "../lib/auth";


export default class index extends Component {
  static propTypes = {
    authenticated: PropTypes.bool
  };

  static async getInitialProps(ctx) {
    return {
      authenticated: isAuthenticated(ctx)
    };
  }

  render() {
    const { authenticated } = this.props;
    return (
      <Layout authenticated={authenticated}>
        <p>Index page</p>
      </Layout >
    )
  }

}
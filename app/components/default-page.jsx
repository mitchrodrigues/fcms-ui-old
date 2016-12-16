import React from 'react';
import i18n from 'lib/i18n';
import Session  from 'model/session';
import LoginPage  from 'components/login-page';
import Dashboard from 'components/dashboard';

import { Router, Route, Link, hashHistory } from 'react-router'


class DefaultPage extends React.Component {
  inited() {
    var state = this.state || {};

    if (state.inited) 
      return true;
   
    return Session.loadOnce(function(result) {
      this.setState({ inited: true });
    }.bind(this));

  }

  render() {
    if (!this.inited())
      return null;

    if (!Session.isLoggedIn())
      return (<LoginPage /> );

    return (
      <Dashboard />
    );
  }
}

DefaultPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};

DefaultPage.childContextTypes = {
  router: React.PropTypes.func.isRequired
}


export default DefaultPage;



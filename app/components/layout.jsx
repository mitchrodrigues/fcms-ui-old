import React from 'react';

import i18n from 'lib/i18n';
import Session  from 'model/session';

import TopNav from   'components/top-nav';
import SideNav  from 'components/side-nav';
import LoginPage  from 'components/login-page';

import Alert from 'components/common/alert';

import _ from 'lodash';

class Layout extends React.Component {

  initSession() {
    if (!this.inited) {
      
      i18n.setLanguage('en');

      Session.loadOnce(function(rec) {
        this.setState({ sessionLoaded: true });
      }.bind(this));

      this.inited = true;
      return null;
    }
  }

  getChildContext() {
    return { router: this.context.router };
  }

  render() {
    var state = this.state || {};

    this.initSession();

    // // Anything wrapped with layout will have this login check.
    // if (!state.sessionLoaded)
    //   return null;

    // if (!Session.isLoggedIn()) {
    //   this.context.router.push('/login');  
    //   return null;
    // }

    return (
      <div>
        <TopNav />
        {Session.isLoggedIn() ? <SideNav /> : null }
        <div className='page-content'>
          {this.props.children}
          <div className='clearfix'></div>
        </div>
      </div>
    );
  }
}

Layout.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Layout.childContextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Layout;



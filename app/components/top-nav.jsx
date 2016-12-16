import React from 'react';
import Session  from 'model/session';
import LoginPage from 'components/login-page';
import Config from 'lib/config';

export default class TopNav extends React.Component {
  logout() {
    Session.delete().then(function() { 
      this.context.router.go('/');
    }.bind(this));
  }

  toggleDropDown() {
    $(this).dropdown('toggle');
  }


  loggedOut() {
    return (
      <nav className="nav navbar navbar-fixed-top navbar-dark bg-inverse">
        <div className='nav-logo col-md-3'>
          FCMS
         </div>
        <div className='clearfix'>&nbsp;</div>
      </nav>
    )
  }

  loggedIn() {
    return (
      <nav className="nav navbar navbar-fixed-top navbar-dark bg-inverse">
          <div className='nav-logo col-md-3'>
            <img src='/images/avatar.gif' className='login-image ' />
            {Session.get('first_name')} {Session.get('last_name')}
          </div>
          <div className="navbar-nav pull-xs-right">                   
          <div className="dropdown" id='acctDropDown' onClick={this.toggleDropDown}>
            <a className="nav-item nav-link" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className='fa fa-cog'></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">              
              <a className="dropdown-item" onClick={this.logout.bind(this)}>Logout</a>
            </div>
          </div>
          <div className='clearfix' />
        </div>
      </nav>
    );
  }

  render() {

    if (!Session.isLoggedIn())
      return this.loggedOut();

    return this.loggedIn();
    
  }
}

TopNav.contextTypes = {
  router: React.PropTypes.func.isRequired
};


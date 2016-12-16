import React from 'react';
import Session  from 'model/session';

import ReactDOM from 'react-dom';

import Config from '../lib/config.js';

import i18n from 'lib/i18n';

import Layout from './layout';



class LoginPage extends React.Component {

  login() {
    var emailEl = $("#email"),
        passEl  = $("#pass");

     Session.login(emailEl.val(), passEl.val()).then(function(result){
        if (!result.validRecord) {          
          return this.setState({ responseKey: result.responseKey });
        }
        this.context.router.go('/');
     
     }.bind(this));
  }

  errorMessage() { 
    var state = this.state || {};
    if (!state.responseKey) return null;
    return (
      <div className='alert alert-danger'>
        {i18n.t(state.responseKey)}
      </div>
    );
  }

  render() {
    return (
        <div className='login-page page-content'>
          <div className='col-md-6 col-md-offset-2'>
            {this.errorMessage()}
            <div className='card'>
              <div className='card-block'>
                <label htmlFor='email'>Email</label>
                <input className='form-control' name='email' id='email' />
                <label htmlFor='password'>Password</label>
                <input className='form-control' name='password' id='pass' type='password' />

                <div className='panel-footer'>             
                  <br />
                  <a className='btn pull-md-right btn-success bg-inverse' 
                     onClick={this.login.bind(this)}>Sign In</a>
                  <div className='clearfix' />
                </div>
              </div>
            </div>
          </div>
          <div className='clearfix' />
        </div>
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};


export default LoginPage;


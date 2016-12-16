import React from 'react';

import i18n from 'lib/i18n';
import Session  from 'model/session';

import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import LoginPage  from 'components/login-page';
import DefaultPage from 'components/default-page';
import Dashboard from 'components/dashboard';

import OfficeList from 'components/offices/list';
import OfficeShow from 'components/offices/show';

import ChildrenList from 'components/children/list';
import ChildrenShow from 'components/children/show';

import CaseLoad from 'components/children/case-load';




export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
      	{ /* Case Load Routes */ }
        <Route name='cases' path="/cases">
          <IndexRoute component={CaseLoad} />
        </Route>

      	{ /* Office Routes */ }

      	<Route name='offices' path="/offices">
        	<IndexRoute component={OfficeList} />
        	<Route path=":id" component={OfficeShow} />
       	</Route>
       	
        
        { /* Children Routes */ }        
        <Route name='children' path="/children">
        	<IndexRoute component={ChildrenList} />
        	<Route path=":id" component={ChildrenShow} />
       	</Route>


    	{ /* Default */ }
        <Route path="*" component={DefaultPage} />
      </Router>
    );
  }
}

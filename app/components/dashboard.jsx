import React from 'react';

import Session  from 'model/session';
import Layout from './layout';


export default class Dashboard extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Welcome! {Session.attributes.first_name}</h2>
        <ul>           
        </ul>
      </Layout>
    );
  }
}
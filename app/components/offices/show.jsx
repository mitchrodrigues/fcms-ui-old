import React from 'react';

import i18n from 'lib/i18n';
import Session  from 'model/session'

import Layout from '../layout';

import Office from '../../model/office';

import _ from 'lodash';

class OfficeShow extends React.Component {
  office() {
    var state = this.state || {};
    if (state.office) return state.office;

    Office.find(this.props.params.id).then(function(ofc) {
      this.setState({ office: ofc });
    }.bind(this));
  }

  render() {
    var state = this.state || {};

    if (!state.office) {
      this.office();
      return null
    }

    return (
      <Layout>
        <h1>Show {state.office.get('id')}</h1>      
      </Layout>
    )
  }
}

OfficeShow.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default OfficeShow 
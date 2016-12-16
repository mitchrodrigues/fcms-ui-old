import React from 'react';
import _ from 'lodash';

import i18n from 'lib/i18n';
import Layout from 'components/layout';
import Office from 'model/office';

import Actions from 'components/common/actions';
import Search from 'components/common/search'

import { Card, CardTitle, CardBlock }    from 'components/common/card';

import { Link } from 'react-router'


import ChildrenCreate from 'components/children/create';


class OfficeList extends React.Component {

  collection() { 
    var state = this.state || {};

    if (state.offices)
      return state.offices;

    if (!state.offices) {
      Office.collection().then(function(result) {
        this.setState({ offices: result })
      }.bind(this));
      return null;
    }    
  }

  officeCards() {
    var offices = this.collection();

    return _.map(offices, function(office) {
      var id = office.get('id');

      return (
        <Card ref={'card-'  + id} id={'card-'  + id} className={status}>
          <CardTitle toggle='link' target={this.context.router.createPath('/offices/' + id)}>
              <i className='fa fa-building'></i>
              <span>{office.get('name')}</span>
              <div className='status'>
              </div>
          </CardTitle>
        </Card>
      );
    }.bind(this));
  }



  render() {

    return (
      <Layout>
        <div className='offices'>
           <Actions>

            
            <div className='col-md-6'>
              <div className="btn-group" role="group">

              <button type="button"
                   className="btn btn-secondary">Reports <i className='fa fa-line-chart'></i></button>

                <button type="button"
                   className="btn btn-success">Create <i className='fa fa-plus'></i></button>
              </div>

            </div>
            <Search className="col-md-4" model={Office} />
            <div className='clearfix' />

          </Actions>

          <div className='list'>
            {this.officeCards()}
          </div>
        </div>
      </Layout>
    )
  }
}


OfficeList.contextTypes = {
  router: React.PropTypes.func.isRequired
};



export default OfficeList 
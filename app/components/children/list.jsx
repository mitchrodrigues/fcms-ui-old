import React from 'react';
import _ from 'lodash';

import i18n from 'lib/i18n';
import Layout from 'components/layout';
import Child from 'model/child';

import Actions from 'components/common/actions';
import Search from 'components/common/search'

import { Card, CardTitle, CardBlock }    from 'components/common/card';

import { Link } from 'react-router'


import ChildrenCreate from 'components/children/create';




class ChildrenList extends React.Component {
  collection() { 
    var state = this.state || {};

    if (state.children)
      return state.children;

    if (this.props.children)
      return this.props.children;

    if (!state.children) {
      Child.collection().then(function(result) {
        this.setState({ children: result })
      }.bind(this));
      return null;
    }    
  }

  reload() {
    this.setState({ children: null, error: null });
  }
 
  createModal() {
    $('.createChild').modal('toggle');
  }

  searchCallback(results) {
    if (!results)
      return this.reload();

    if (results.length > 0)
      this.setState({ children: results, error: null });
    else
      this.setState({ children: [], error: 'SEARCH.NO_RESULTS' });
  }

  childCards() {
    var children = this.collection();
    return _.map(children, function(child) {
      var status = (child.get('active') ? 'active' : 'inactive'),
              id = child.get('id');

      return (
        <Card ref={'card-'  + id} id={'card-'  + id} className={status}>
          <CardTitle toggle='link' target={this.context.router.createPath('/children/' + id)}>
              <img src='/images/avatar.gif' className='avatar' />
              <span>{child.name()}</span>
              <div className='status'>
                {status}
              </div>
          </CardTitle>
        </Card>
      );
    }.bind(this));
  }

  errorMessage() {
    var state = this.state || {}
      if (!state.error)
        return null;
  
    return (
      <div className='alert alert-warning col-md-8 col-md-offset-2'>
        <i className='fa fa-exclamation-triangle fa-4'></i>
        {i18n.t(state.error)}
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <div className='children'>
          <ChildrenCreate className='createChild' saveCallback={this.reload.bind(this)} />

          <Actions>

            
            <div className='col-md-6'>
              <div className="btn-group" role="group">

              <button type="button" onClick={this.createModal.bind(this)}
                   className="btn btn-secondary">Reports <i className='fa fa-line-chart'></i></button>


                <button type="button" onClick={this.createModal.bind(this)}
                   className="btn btn-secondary">Quick Place <i className='fa fa-building-o'></i></button>

                <button type="button" onClick={this.createModal.bind(this)}
                   className="btn btn-secondary">Assign Worker <i className='fa fa-users'></i></button>
           
                <button type="button" onClick={this.createModal.bind(this)}
                   className="btn btn-success">Create <i className='fa fa-plus'></i></button>
              </div>

            </div>
            <Search className="col-md-4" model={Child} searchCallback={this.searchCallback.bind(this)} />
            <div className='clearfix' />

          </Actions>
          {this.errorMessage()}
          <div className='list'>
            {this.childCards()}
          </div>
        </div>
      </Layout>
    )
  }
}


ChildrenList.contextTypes = {
  router: React.PropTypes.func.isRequired
};



export default ChildrenList;
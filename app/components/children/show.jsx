import React from 'react';

import Session  from 'model/session'
import Layout from 'components/layout';
import Child from 'model/child';


export default class ChildrenShow extends React.Component {
  child() { 
  	 var state = this.state || {};
  	 if (state.child)
  	 	return state.child;


 	Child.find(this.props.params.id).then(function(child){
 		this.inited = true;
 		this.setState({ child: child });
 	}.bind(this));
 	return null;
  }


  childInfo() {
  	var child = this.child();
  	if (!child) return null;

  	return (
  	  <div>
  	  	{child.name()}
  	  </div>	
  	);
  }


  render() {
    return (
      <Layout>
        <div className='child'>
          {this.childInfo()}
        </div>
      </Layout>
    );
  }
}

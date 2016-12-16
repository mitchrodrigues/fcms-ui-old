import React from 'react';
import _ from 'lodash';

import i18n from 'lib/i18n';
import Session  from 'model/session'
import Child from 'model/child';

import { Card, CardTitle, CardBlock }    from 'components/common/card';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'components/common/modal';

export default class ChildrenCreate extends React.Component {
  dismiss() { 
  	$('.' + this.props.className).modal('hide');
  	$(this.refs.createChild)[0].reset();
  }

  save() {
  	var child = new Child({}),
  		form  = $(this.refs.createChild);

  	child.loadForm2Attributes(form);
  	child.save().then(function(chld) {
  		this.dismiss();
		if (this.props.saveCallback)
			this.props.saveCallback(chld);
  	}.bind(this));
  }

  render() {
    return (
      <Modal className={this.props.className}>
      	<ModalHeader>
      		<h2>Add Child</h2>
      	</ModalHeader>
      	<ModalBody>
      		<form ref='createChild'>
      			First Name: 
      				<input className='form-control' name='first_name' />
      			Middle Name: 
      				<input className='form-control' name='middle_name' />
      			Last Name: 
      				<input className='form-control' name='last_name' />
      		</form>
      	</ModalBody>

      	<ModalFooter>
      		<button onClick={this.dismiss.bind(this)} className='btn btn-primary-outline'>Cancel</button>
      		<button onClick={this.save.bind(this)} className='btn btn-success-outline'>Save</button>
      	</ModalFooter>
      </Modal>
    );
  }
}

import ModelBase from './base.js';

class Child extends ModelBase {
  constructor(attributes) {
    super(attributes, 'children');
  }

  name(include_middle) {
  	var nameStr = this.get('first_name') + ' ';
  	if (include_middle)
  		nameStr = nameStr + this.get('middle_name') + ' ';

  	return nameStr + this.get('last_name');
  }

  legalName() {
  	return this.get('last_name')  + ', ' +
  	       this.get('first_name') + ' '  +
  	       this.get('middle_name');
  }
}

export default Child;

import _ from 'lodash';


var FlashMessage = {
	flashes: {},
	mapped:  false,


	notice: function(message) {
	  this.addMessage('info', message);
	},

	error: function(message) {
	  this.addMessage('danger', message);
	},

	addMessage: function(type, message) {
		this.flashes[type] = message
	},

	get: function(type) {
		var messages = this.flashes[type];
		this.flashes[type] = null;
		return messages;
	},

	map: function(callback) {
		this.mapped = true;
		return _.map(this.flashes, function(value, key) {
			return callback(key, value);
		});
	},

	reset: function() { 
		if (!this.mapped)
			return;
		
		this.mapped = false;
		this.flashes = {};
	}
}



export default FlashMessage;

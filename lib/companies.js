var Base = require('./base');

var Companies = new Base();

Companies.prototype.getAll = function(callback) {
	this.request('people', null, callback);
};

module.exports = Companies;
var Base = require('./base');

var Companies = new Base();

Companies.prototype.getAll = function(callback) {
	this.request('companies', null, callback);
};

Companies.prototype.get = function(id, callback) {
	this.request('companies' + id, null, callback);
};

Companies.prototype.update = function(id, data, callback) {
	this.post('companies/' + id, data, callback, 'PUT');
};

Companies.prototype.add = function(data, callback) {
	this.post('companies', data, callback, 'POST');
};

module.exports = Companies;
var Base = require('./base');

var People = new Base();

People.prototype.get = function(callback) {
	this.request('people', null, callback);
};

People.prototype.getAll = function(companyId, callback) {
	this.request('people/'+companyId+'/users', null, callback);
};

module.exports = People;
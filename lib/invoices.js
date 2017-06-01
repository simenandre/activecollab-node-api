var Base = require('./base');

var Invoices = new Base();

Invoices.prototype.getAll = function(callback) {
	this.request('invoices/', null, callback);
};

Invoices.prototype.get = function(id, callback) {
	this.request('invoices/' + id, null, callback);
};

Invoices.prototype.invoiceMarkAsSent = function(id, callback){
	this.request('invoices/' + id + '/mark-as-sent', null, callback);
}

module.exports = Invoices;
var Base = require('./base');

var Reports = new Base();

Reports.prototype.run = function(data, callback) {
	this.request('reports/run', data, callback);
};

module.exports = Reports;
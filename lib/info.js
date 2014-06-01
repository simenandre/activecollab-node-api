var Base = require('./base');

var Info = new Base();

Info.prototype.getInfo = function(callback) {
	this.request('info', null, callback);
};

Info.prototype.get = function(info, callback) {
	this.request('info/'+info, null, callback);
};

module.exports = Info;
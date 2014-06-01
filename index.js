var path = require('path');

var ActiveCollab = function(apiUrl, apiKey) {
	this.apiUrl = apiUrl;
	this.apiKey = apiKey;
	this.debugEnabled = false;
	this.modules = [
		'companies',
		'info',
		'people',
		'projects',
		'tasks'
	];
	this.loadModules();
}

ActiveCollab.prototype.loadModules = function() {
	var m, mp, obj;
	for(m in this.modules) {
		mp = path.resolve(__dirname, 'lib', this.modules[m]);
		obj = require(mp);
		this[this.modules[m]] = new obj();
		this[this.modules[m]].setParent(this);
	}
};

module.exports = ActiveCollab;

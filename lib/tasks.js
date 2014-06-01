var Base = require('./base');

var Tasks = new Base();

Tasks.prototype.getAll = function(projectId, callback) {
	this.request('projects/'+projectId+'/tasks', null, callback);
};

module.exports = Tasks;
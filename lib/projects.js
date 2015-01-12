var Base = require('./base');

var Projects = new Base();

Projects.prototype.getAll = function(callback) {
	this.request('projects', null, callback);
};

Projects.prototype.getTracking = function(projectId, callback) {
	this.request(this.joinPath(['projects', projectId, 'tracking']), null, callback);
};

Projects.prototype.postRequest = function(request, callback) {
	this.request('projects/requests/add', request, callback);
};

module.exports = Projects;

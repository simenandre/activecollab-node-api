var request = require('request'),
	querystring = require('querystring');

var Base = function() {
	var BaseBase = function() {};

	BaseBase.prototype.setParent = function(ac) {
		this.ac = ac;
	};

	BaseBase.prototype.debug = function(msg) {
		if(this.ac.debugEnabled) {
			console.log(msg);
		}
	};

	BaseBase.prototype.request = function(path_info, data, callback) {
		var self = this;
		if(data==null || typeof(data)!='object') {
			data = {};
		}
		data.path_info = path_info;
		data.auth_api_token = this.ac.apiKey;
		data.format = 'json';
		data.submitted = 'submitted';
		var url = this.ac.apiUrl+'?'+querystring.stringify(data);
		this.debug('Base.request('+path_info+') url = '+url);
		var getRequest = request.get(url, {}, function(error, response, body) {
			if(error) {
				return callback(error, null);
			}
			// TODO: Handle errors
			var json;
			self.debug('Base.request('+path_info+') Request received');
			if(typeof(callback)=='function') {
				self.debug('Base.request('+path_info+') Invoking callback');
				try {
					json = JSON.parse(body);
				} catch(e) {
					error = { error: 'NO JSON' };
				}
				callback(error, json);
			}
		});
	};

	BaseBase.prototype.post = function(path_info, data, callback) {
		var self = this;
		var url = {};
		if(data==null || typeof(data)!='object') {
			data = {};
		}
		url.path_info = path_info;
		url.auth_api_token = this.ac.apiKey;
		url.format = 'json';
		url = this.ac.apiUrl+'?'+querystring.stringify(url);
		this.debug('Base.request('+path_info+') url = '+url);
		var getRequest = request.post({url:url, form:data}, function(error, response, body) {
			if(error) {
				return callback(error, null);
			}

			var json;
			self.debug('Base.request('+path_info+') Request received');
			if(typeof(callback)=='function') {
				self.debug('Base.request('+path_info+') Invoking callback');
				try {
					json = JSON.parse(body);
				} catch(e) {
					error = { error: 'NO JSON, just: '+body };
				}
				callback(error, json);
			}
		});
	};

	BaseBase.prototype.joinPath = function(items) {
		return items.join('/');
	};

	// BaseBase.prototype.filter = function(items, filter) {
	// 	// TODO
	// };

	return BaseBase;
}

module.exports = Base;

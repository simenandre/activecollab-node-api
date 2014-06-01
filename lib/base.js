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
			// TODO: Handle errors
			var json;
			self.debug('Base.request('+path_info+') Request received');
			if(typeof(callback)=='function') {
				self.debug('Base.request('+path_info+') Invoking callback');
				try {
					json = JSON.parse(body);
				} catch(e) {
					json = { error: 'NO JSON' };
				}
				callback(json);
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

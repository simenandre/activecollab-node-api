# activecollab-node-api

[![Greenkeeper badge](https://badges.greenkeeper.io/cobraz/activecollab-node-api.svg)](https://greenkeeper.io/)

A simple client module for accessing ActiveCollab's API.
Based on the work of @lasar

## Installation

	npm install activecollab

## Usage

	var ActiveCollab = require('activecollab');

	var apiUrl = 'https://your-activecollab-site.com/api.php';
	var apiKey = 'Your API key, can be found in your user settings';

	var ac = new ActiveCollab(apiUrl, apiKey);

	self.activeCollab.projects.getAll(function(projects) {
		console.log('All my projects:', projects);
	});

## To Do

- Documentation
- Implement all API endpoints
- Examples
- Tests

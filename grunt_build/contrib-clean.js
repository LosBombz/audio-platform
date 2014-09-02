'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('clean', {
		dist: ['.tmp', '<%= config.dist %>/*'],
		server: ['.tmp', '<%= config.app %>/*.html']
	});

};
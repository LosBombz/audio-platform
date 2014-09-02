'use strict';

/*global module*/
module.exports = function(grunt) {

	grunt.config('connect', {
		options: {

				port: grunt.SERVER_PORT,
				// change this to '0.0.0.0' to access the server from outside
				// hostname: 'localhost'
				hostname: '0.0.0.0'
			},

			// live reload server settings
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							grunt.lrSnippet,
							grunt.mountFolder(connect, '.tmp'),
							grunt.mountFolder(connect, grunt.appConfig.app)
						];
					}
				}
			},

			// dist server settings to test built code
			dist: {
				options: {
					middleware: function (connect) {
						return [
							grunt.mountFolder(connect, grunt.appConfig.dist)
						];
					}
				}
			}
	});

};

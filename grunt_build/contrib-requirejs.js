'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('requirejs', {
		dist: {
			// Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
			options: {
				baseUrl: '<%= config.app %>/scripts',
				mainConfigFile: '<%= config.app %>/scripts/app.main.js',
				name: 'bower_components/almond/almond',
				out: '<%= config.dist %>/scripts/app.built.js',
				preserveLicenseComments: false,
				inlineText: true,
				wrap: true,
				include: [
					'app.main'
					//'modules/jank/jank.main',
					//...
				],
			},
			optimize: 'uglify'
		}
	});

};

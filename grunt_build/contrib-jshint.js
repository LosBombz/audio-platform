// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('jshint', {
		options: {
			jshintrc: '.jshintrc',
			reporter: require('jshint-stylish')
		},
		all: [
			'Gruntfile.js',
			'<%= config.app %>/scripts/{,*/}*.js',
			'!<%= config.app %>/scripts/libs/*'
		]
	});

};

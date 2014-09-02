'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('includes', {
		dist: {
			cwd: '<%= config.app %>/includes/pages',
			src: [ '*.html'],
			dest: '<%= config.dist %>',
			options: {
				flatten: true,
				includePath: '<%= config.app %>/includes/partials'
			}
		},
		dev: {
			cwd: '<%= config.app %>/includes/pages',
			src: [ '*.html'],
			dest: '<%= config.app %>',
			options: {
				flatten: true,
				includePath: '<%= config.app %>/includes/partials'
			}
		}
	});

};

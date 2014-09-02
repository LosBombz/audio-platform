// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('watch', {
		options: {
			nospawn: true,
			livereload: true
		},

		// watch for changes in sass files
		styles: {
			files: '<%= compass.dev.options.sassDir %>/{,*/}{,*/}*.scss',
			tasks: ['compass:dev']
		},

		// watch for changes in include files
		includes: {
			files: '<%= config.app %>/includes/*/*.html',
			tasks: ['includes:dev']
		},

		// live reload page on changes made to these files
		livereload: {
			options: {
				livereload: grunt.LIVERELOAD_PORT
			},
			files: [
				'<%= config.app %>/includes{,*/}*.html',
				'<%= config.app %>/styles/{,*/}*.scss',
				'{.tmp,<%= config.app %>}/scripts/{,*/}*.js',
				'<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
				'<%= config.app %>/scripts/templates/*.{ejs,mustache,hbs}'
			]
		}
	});

};

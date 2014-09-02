'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('imagemin', {
		dist: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>/images',
					src: '**/*.{png,jpg,jpeg}',
					dest: '<%= config.dist %>/images'
				}]
			}
	});

};

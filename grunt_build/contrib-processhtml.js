'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('processhtml', {
		dist: {
			files: {
				'<%= config.dist %>/index.html': ['<%= config.app %>/index.html']
			}
		}
	});

};

'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('copy', {
		dist: {
			files: [{
				expand: true,
				dot: true,
				cwd: '<%= config.app %>',
				dest: '<%= config.dist %>',
				src: [
					'*.{ico,txt}',
					'images/{,*/}*.{webp,gif}',
					'fonts/{,*/}*.*',
					'media/{,*/}*.*',
					'scripts/libs/modernizr.js',
					'scripts/vendor/*.js',
					'includes/{,*/}*.html'
				]
			}]
		}
	});

};

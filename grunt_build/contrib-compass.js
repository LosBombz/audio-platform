'use strict';
/*global module*/
module.exports = function(grunt) {

	grunt.config('compass', {
		dist: {
			options: {
				config: 'config.rb',
				sassDir: '<%= config.app %>/styles/sass',
				cssDir: '<%= config.dist %>/styles',
				outputStyle: 'compressed',
				imageDir: '<%= config.dist %>/images',
				fontsDir: '<%= config.dist %>/fonts',
				relativeAssets: true,
				noLineComments: true,
				environment: 'production'
			}
		},
		dev: {
			options: {
				config: 'config.rb',
				sassDir: '<%= config.app %>/styles/sass',
				cssDir: '<%= config.app %>/styles/css',
				imageDir: '<%= config.app %>/images',
				fontsDir: '<%= config.app %>/fonts',
				relativeAssets: true,
				environment: 'development'
			}
		}
	});

};

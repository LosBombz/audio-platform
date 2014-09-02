'use strict';

module.exports = function (grunt) {

	// Save the connect server variables to the grunt object
	grunt.LIVERELOAD_PORT = 35729;
	grunt.SERVER_PORT = 9000;
	grunt.lrSnippet = require('connect-livereload')({port: grunt.LIVERELOAD_PORT});
	grunt.mountFolder = function (connect, dir) {
		return connect.static(require('path').resolve(dir));
	};

	// Show elapsed time at the end
	require('time-grunt')(grunt);

	// Load all grunt tasks from the node_modules directory
	// Without having to register them manualy *magic*
	require('load-grunt-tasks')(grunt);

	// Save the configurable paths variables to the grunt object
	grunt.appConfig = {
		app: 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		config: grunt.appConfig,
	});

	// Pull in all the grunt tasks located in the grunt_build folder
	grunt.loadTasks('grunt_build');

	// 'grunt s' in terminal
	grunt.registerTask('s', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'open:server', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'connect:livereload',
			'open:server',
			'includes:dev',
			'watch',

		]);
	});

	// 'grunt build' in terminal
	grunt.registerTask('build', [
		'clean:dist',
		'requirejs',
		'imagemin',
		'copy',
		'compass',
		'includes:dist',
		'processhtml'
	]);

	// 'grunt' in terminal
	grunt.registerTask('default', [
		'jshint',
		'build'
	]);
};

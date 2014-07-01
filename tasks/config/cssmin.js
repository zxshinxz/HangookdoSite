/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

	grunt.config.set('cssmin', {
		dist: {
			src: ['public/concat/production.css'],
			dest: 'public/min/production.min.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};

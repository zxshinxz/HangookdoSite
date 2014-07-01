/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		dist: {
			src: ['public/concat/production.js'],
			dest: 'public/min/production.min.js'
		},
		app: {
			src: ['public/concat/productionapp.js'],
			dest: 'public/min/productionapp.min.js'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};

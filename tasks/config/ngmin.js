/**
 * 
 */

/**
 * Concatenate files.
 * 
 * ---------------------------------------------------------------
 * 
 * Concatenates files javascript and css from a defined array. Creates
 * concatenated files in public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 * 
 * For usage docs see: https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('ngmin', {
		app : {
			src : 'public/concat/productionapp.js',
			dest : 'public/concat/productionapp.js'
		}
	});

	grunt.loadNpmTasks('grunt-ngmin');
};

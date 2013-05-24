module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			scripts: {
				files: ['./src'],
				tasks: ['jshint','livereload'],
				options: {
					nospawn: true,
				}
			},
		},
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['Gruntfile.js', 'src/components/<%= pkg.name %>/*.js', 'tests/<%= pkg.name %>/*.js']
		},
		rsync: {
			"test": {
				src: "./src/",
				dest: "aaron@akb.io:/var/www/bolddaemon/test/",
				syncDest: true,
				recursive: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.loadNpmTasks('grunt-devtools');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jshint', 'rsync']);
};

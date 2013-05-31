module.exports = function(grunt) {
	grunt.initConfig({
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
			},
			"live": {
				src: "./src/",
				dest: "aaron@akb.io:/var/www/bolddaemon/",
				syncDest: true,
				recursive: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.registerTask('default', ['jshint', 'rsync']);
};

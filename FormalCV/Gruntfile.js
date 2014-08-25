module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      less: {
        files: 'assets/less/*.less',
        tasks: ['less'],
        options: {
          spawn: false
        }
      },
      html: {
        files: '**/index.html',
        options: {
          spawn: false
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["assets/css", "assets/less","bower_components/components-bootstrap/less"]
        },
        files: {
          "assets/css/layout.css": "assets/less/layout.less",
          "assets/css/bootstrap.css": "assets/less/bootstrap.less"
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
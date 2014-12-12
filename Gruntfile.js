/*!
 * @author Aljona Murygina - murygina@synyx.de
 */
module.exports = function (grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*']
  });

  grunt.initConfig({

    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: true
      },
      gruntFile: ['Gruntfile.js']
    },

    sass: {
      compile: {
        options: {
          loadPath: [
            'bower_components/reset-scss/',
            'bower_components/bourbon/dist/',
            'bower_components/base/'
          ]
        },
        files: {
          'css/timer.css': 'sass/timer.scss',
          'css/pie.css': 'sass/pie.scss',
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    watch: {
      gruntFile: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:gruntfile']
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass:compile']
      },
      reload: {
        files: [
          '**/*.html',
          'css/*.css'
        ],
        options: {
          livereload: 8001
        }
      }
    },

    connect: {
      all: {
        options: {
          port: 8000,
          livereload: 8001,
          open: {
            target: 'http://localhost:8000/'
          }
        }
      }
    }

  });

  grunt.registerTask('serve', [
    'sass:compile',
    'connect',
    'watch'
  ]);

  grunt.registerTask('default', [
    'serve'
  ]);

};

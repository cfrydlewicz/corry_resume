/*jshint esversion: 6 */
module.exports = function(grunt) {

  const sass = require('node-sass');
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    devUpdate: {
      main: {
        options: {
          updateType: 'report', // just report outdated packages
          reportUpdated: false, // don't report up-to-date packages
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js']
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: false,
        style: 'expanded'
      },
      dist: {
        files: {
          'css/resume.concat.css' : 'scss/00_manifest.scss'
        }
      }
    },

    cmq: {
      your_target: {
        files: {
          'css': ['css/*.concat.css']
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      your_target: {
        src: 'css/*.concat.css'
      },
    },

    cssmin: {
      mintheme: {
        src: 'css/resume.concat.css',
        dest: 'css/resume.min.css'
      }
    },

    watch: {
      files: [
        'Gruntfile.js',
        'package.json',
        'scss/*.scss'
      ],
      tasks: ['default']
    }

  });

  // Default task(s).
  grunt.registerTask('default', ['devUpdate', 'jshint', 'sass', 'cmq', 'autoprefixer', 'cssmin']);

};
